# checking

![checking](https://travis-ci.org/Javascipt/checking.svg)

This package allows you to check the availability of a domain name using the [whoisxmlapi](https://www.whoisxmlapi.com/) api.

### Installation 

```bash
 $ npm install checking
```

### How does it work

[whoisxmlapi](https://www.whoisxmlapi.com/) allows you to make free 50 queries, but if you sign up, you can get 500 free queries. You also can buy more balance if you need to.

```javascript
  var checking = require('checking');
  
  /* specifying your whoisxmlapi username and password is optional */
  checking.username = 'MY USERNAME'
  checking.password = '******'
  
  checking.check('domain.com', function (error, available) {
    if(error) return console.log(error);
    if(available) {
      console.log('domain.com is available');
    } else {
      console.log('No chance!');
    }
  })
```