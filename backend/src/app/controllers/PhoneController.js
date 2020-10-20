const phoneService = require('./../services/PhoneService');

class PhoneController {

    index(req, res) {
        try {
            const { code } = req.query;

            if (!code) {
                const message = "Please, enter with a phone code"
                return res.status(400).json({ status: 400, message });
            }

            const word = phoneService.decodeCodeToWord(code);

            return res.status(200).json({ status: 200, message: word });
        }
        catch(error) {
            console.log(error);
        }
    }

}

module.exports = new PhoneController();