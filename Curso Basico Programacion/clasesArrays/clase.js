class pakitron 
{
    constructor(name, healt, attack, type)
    {
        this.picture = new Image();
        this.name = name
        this.healt = healt
        this.attack = attack
        this.type = type
        this.picture.src = pictures[this.name];
    }
    speak()
    {
        alert(this.name);
    }
    view()
    {
        document.body.appendChild(this.picture);
        document.write('<p>');
        document.write('<strong>' + this.name + '</strong><br />');
        document.write('health: ' + this.healt + '<br />');
        document.write('attack: ' + this.attack + '<br />');
        document.write('type: ' + this.type + '<hr />');
        document.write('</p>');
    }
}