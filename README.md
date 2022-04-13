# Newsman SMTP API Node Client
Newsman is a Smart Email Service Provider. We send newsletters on behalf of our customers.\
This is a very compact NodeJS wrapper and it uses Axios HTTP calls to our Newsman SMTP API.

See https://kb.newsmansmtp.com/api/ for details.\
You must set up a Newsman SMTP Account ID and API key.

# Usage sample
```javascript
const Nzmsmtp = require('nzm-smtp-client')

const client = new Nzmsmtp.method('template', 'get')

const getTemplate = async () => {

    try {
        const template = await client.callParams(
            {
                account_id: 'youraccount',
                key: 'yourapikey',
                template_id: 'yourtemplateid'
            }
        )
        console.log(template.data);
    } catch (error) {
        console.error(error)
    }

}

getTemplate() 
```
