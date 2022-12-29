<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <table border="1">
            <tr>
                <td>Filip</td>
                <td>Piskorski</td>
            </tr>
            <tr><td>Sprawozdanie 1</td><td>IMST2 1.3</td></tr>
        </table>
        <br>
        
        <form method="get" action="">
            Podaj liczbe z ciagu fibonnaciego (wyższa liczba może oznaczać długi czas obliczeń): <input type="number" name="number" id="number"><br> 
        <input type="submit">
        </form>
        <?php
function fib($n)
{
    if($n<0)
        return 0;
    if ($n <= 1)
        return $n;
    return fib($n - 1) +
           fib($n - 2);
}
if(isset($_GET['number']))
{
    print('Wynik to:');
    print( fib($_GET['number']));
}
?>
        
    </body>
</html>
