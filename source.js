let field_name = prompt("Enter field name", "UserName");
if (field_name == null || field_name == "") {
    console.log("User cancelled the prompt.");
  } else {
    console.log("Field name: " + field_name );
    (async() => {

            try {
                let app = await require('qlik').currApp();
                let field = await app.model.enigmaModel.getField({"qFieldName": field_name}); // check if field exists
                let scramble_result = await app.model.enigmaModel.scramble({"qFieldName": field_name}); // execute Qlik Scramble API
                let save_result = await app.doSave({"qFileName": field_name}) // save scrambled value
                console.log(scramble_result)
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
