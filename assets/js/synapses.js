$('#buttonHR').click(function(){
    $(this).text(function(i,old){
        return old=='VIEW' ?  'HIDE' : 'VIEW';
    });
});

$('#buttonHR2').click(function(){
    $(this).text(function(i,old){
        return old=='VIEW' ?  'HIDE' : 'VIEW';
    });
});

$('#buttonHRBeta').click(function(){
    $(this).text(function(i,old){
        return old=='BETA' ?  'HIDE' : 'BETA';
    });
});

$('#buttonTip').click(function(){
    $(this).text(function(i,old){
        return old=='READ' ?  'HIDE' : 'READ';
    });
});

$('#btnColorCopy').click(function(){
    $(this).text(function(i,old){
        return old=='USE COLOR' ?  'GREAT SUCCESS' : 'USE COLOR';
    });
});