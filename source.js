let field_name = prompt("Enter field name", "UserName");
if (field_name == null || field_name == "") {
    console.log("User cancelled the prompt.");
  } else {
    console.log("Field name: " + field_name );
    (async() => {

            let app = await require('qlik').currApp();

            try {
                let field = await app.model.enigmaModel.getField({"qFieldName": field_name});
                let result =await app.model.enigmaModel.scramble({"qFieldName": field_name}); // execute Qlik Scramble API
                console.log(result)
                alert('success')
            }
            catch (error) {
                console.error(error);
                alert('error')
            }
            finally {
                console.log('done');
            }
    })()
};
