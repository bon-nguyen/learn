# Pattern

# website to learn regex

--- Example
POST /api/register

https://regexr.com/

\ Biến các giá trị đăc biệt thành các giá trị thông thường

## Validate middleware

const phoneRegex = /^0[0-9]{9}$/

module.export = (req, res, next) => {
const {phoneNumber} = req.body
if(phoneNumberRegex.test(phoneNumber)){
return next()
}

    res.status(400).end()

}

// Middleware
Func input req, res, next

- next () -> chuyen sang middleware tiep theo
