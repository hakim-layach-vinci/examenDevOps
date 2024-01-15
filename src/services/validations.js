// TODO: Refactor validation function to follow the defined validations rules
function isValid(gamerTag){
    if(gamerTag.lenght>=8) return true;
    return false;
}
exports.isValid = isValid;
