//Codigo fizzbuzz simplificado//

    fizzbuzz(50);

    function fizzbuzz(num)
    {
    for(let i = 1; i <= num; i++)
    {
        if (i % 3==0 && i % 5 != 0){document.write('fizz');}
        if (i % 3 != 0 && i % 5 == 0){document.write('buzz');}
        if (i % 3 == 0 && i % 5 == 0){document.write('fizzbuzz');}
        if (i % 3 != 0 && i % 5 != 0){document.write(i);}
        document.write('<br>');
    }
    }

//Codigo fizzbuzzforma larga//
/*let num = 50;
for (let i = 1; i <= 50; i++)
{
    if (i % 3 !=0 && i % 5 != 0)
    {
        document.write(i);
    }

    if (i % 3 == 0)
    {
        document.write('fizz');
    } 

    if (i % 5 == 0) 
    {
        document.write('buzz');
    }
    document.write('<br>');     
}*/



