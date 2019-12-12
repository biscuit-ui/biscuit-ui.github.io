nunjucks.configure('templates', { autoescape: true });

var template_names = ['border', 'radius', 'color', 'padding', 'margin', 'font', 'height', 'width', 'flex', 'text', 'leading_height']
for(var i = 0; i < template_names.length; i++) {
    var name = template_names[i];
    var html = nunjucks.render(name + '.njk', {});
    document.getElementById(name).innerHTML = html; 
}