import isNumeric from "../utils/isNumeric.js";
import { statusPossibilities } from "../utils/status.js";
import { smsMessage } from "../models/smsMessage.js";

export const updateSmsMessage = async (req, res) => {
  if (!req.params.id && !req.body.status) {
    return res.code(400).send({ message: "ID ou Status não enviado" });
  }

  if (!isNumeric(req.params.id)) {
    return res
      .code(400)
      .send({ message: "O ID da mensagem deve ser puramente numérico" });
  }
  if (!statusPossibilities.includes(req.body.status))
    return res
      .code(400)
      .send({ message: "Status inválido", corretOptions: statusPossibilities });

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
