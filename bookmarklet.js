javascript:(function()%7B!function()%7Blet%20e%3Dprompt(%22Enter%20field%20name%22%2C%22UserName%22)%3Bnull%3D%3De%7C%7C%22%22%3D%3De%3Fconsole.log(%22User%20cancelled%20the%20prompt.%22)%3A(console.log(%22Field%20name%3A%20%22%2Be)%2C(async()%3D%3E%7Blet%20l%3Dawait%20require(%22qlik%22).currApp()%3Btry%7Bawait%20l.model.enigmaModel.getField(%7BqFieldName%3Ae%7D)%3Blet%20o%3Dawait%20l.model.enigmaModel.scramble(%7BqFieldName%3Ae%7D)%3Bconsole.log(o)%2Calert(%22success%22)%7Dcatch(e)%7Bconsole.error(e)%2Calert(%22error%22)%7Dfinally%7Bconsole.log(%22done%22)%7D%7D)())%7D()%3B%7D)()%3B
