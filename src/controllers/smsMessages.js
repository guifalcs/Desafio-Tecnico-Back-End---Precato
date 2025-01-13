import isNumeric from "../utils/isNumeric.js";
import { statusPossibilities } from "../utils/status.js";
import { smsMessage } from "../models/smsMessage.js";
import { Op } from "sequelize";

export const updateSmsMessage = async (req, res) => {
  //Validação da requisição
  if (!req.params.id && !req.body.status) {
    return res.code(400).send({ message: "ID ou Status não enviado" });
  }

  if (!isNumeric(req.params.id)) {
    return res
      .code(400)
      .send({ message: "O ID da mensagem deve ser puramente numérico" });
  }

  if (!statusPossibilities.includes(req.body.status)) {
    return res
      .code(400)
      .send({ message: "Status inválido", corretOptions: statusPossibilities });
  }

  //Atualização
  try {
    const smsToUpdate = await smsMessage.findByPk(req.params.id);

    if (!smsToUpdate) {
      return res.code(404).send({ message: "Registro não encontrado" });
    }

    const updatedSms = await smsMessage.update(
      {
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.code(200).send({ message: "Status atualizado" });
  } catch (err) {
    console.log(err);
  }
};

export const getSmsByStatus = async (req, res) => {
  //Validação da requisição
  if (!statusPossibilities.includes(req.body.status)) {
    return res
      .code(400)
      .send({ message: "Status inválido", corretOptions: statusPossibilities });
  }

  //Pesquisa
  try {
    const smsByStatus = await smsMessage.findAll({
      where: {
        status: req.body.status,
        updatedAt: {
          [Op.gte]: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      },
    });

    if (smsByStatus.length === 0) {
      return res.code(404).send({
        message:
          "Nenhuma mensagem encontrada para esse status nas últimas 24 horas.",
      });
    }

    return res
      .code(200)
      .send({ message: "Mensagens encontradas", filteredSms: smsByStatus });
  } catch (err) {
    console.log(err);
  }
};
