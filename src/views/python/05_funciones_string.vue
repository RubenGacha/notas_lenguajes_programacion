<template>
    <div id="cuerpo">
        <h1>Funciones con String</h1>

        <p>dentro de la clase str tenemos algunos metodos o funciones que nos permite interactuar con textos las cuales
            algunas son:</p>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Método</th>
                    <th scope="col">descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">lower()</td>
                    <td scope="row">transforma el texto en minuscula</td>
                </tr>
                <tr>
                    <td scope="row">upper()</td>
                    <td scope="row">transforma el texto en mayuscula</td>
                </tr>
                <tr>
                    <td scope="row">capitalize()</td>
                    <td scope="row">transforma la primera letra en mayuscula</td>
                </tr>
                <tr>
                    <td scope="row">count("c")</td>
                    <td scope="row">cuenta cuantas veces aparece un caracter o cadena en el string</td>
                </tr>
                <tr>
                    <td scope="row">find("c")</td>
                    <td scope="row">busca un caracter o cadena dentro del string y devuelve su ubicacion si no encuentra
                        devuelve -1</td>
                </tr>
                <tr>
                    <td scope="row">isdigit()</td>
                    <td scope="row">devuelve true o false para comprobar si es un numero</td>
                </tr>
                <tr>
                    <td scope="row">isalnum()</td>
                    <td>devuelve true o false para comprobar si es un alfanumerico</td>
                </tr>
                <tr>
                    <td scope="row">isalpha()</td>
                    <td scope="row">devuelve true o false para comprobar si es un alfabetico</td>
                </tr>
                <tr>
                    <td scope="row">split()</td>
                    <td scope="row">separa el string por espacios</td>
                </tr>
                <tr>
                    <td scope="row">split(",")</td>
                    <td scope="row">separa el string por el caracter pasado</td>
                </tr>
                <tr>
                    <td scope="row">strip()</td>
                    <td scope="row">quita los espacios tanto al inicio como al fin</td>
                </tr>
                <tr>
                    <td scope="row">replace("buscado","remplasa")</td>
                    <td scope="row">quita los espacios tanto al inicio como al fin</td>
                </tr>
                <tr>
                    <td scope="row">rfind()</td>
                    <td scope="row">busca un caracter desde el final al inicio devuelve la ultima posicion que aparece
                        el caracter devuelve
                        -1 si no encuentra nada</td>
                </tr>
            </tbody>
        </table>


        <pre v-highlightjs><code class="python">
texto="ruben es una persona que le gusta caminar"
texto.upper()</code></pre>

        <h2>Texto multilinea</h2>

        <p>En algunos casos queremos escribir mas de una linea para esto podemos usar <em class="enfasis">"""....."""</em> o <em
                class="enfasis">'''.....'''</em> encerrando el string esto nos permite escribir un strin en varias lineas, los
            saltos de linea se incluyen automaticamente para poder prevenir este salto se usa <em
                class="enfasis">\</em>.</p>

        <pre v-highlightjs><code class="python">print("""\
Uso: algo [Opciones]
    -h              Muestra el hostname en Uso
    -H              Nombre del host al cual conectarse
""")</code></pre>



        <h2>Extraer un caracter o recorrer caracter a caracter</h2>
        <p>tambien se puede recorrer letra a letra del string usando <em>[posicion]</em> ya que el string se puede
            tratar como
            un array de caracteres</p>

        <pre v-highlightjs><code class="python">
texto="ruben es una persona que le gusta caminar"
len(texto)#cantidad de caracteres que tiene el String
texto[len(texto)-1] #el ultimo caracter de la cadena
        </code></pre>

        <h2>SubString o Slices</h2>
        <p>se puede obtener partes del string usando los Slices(rebanadas) para esto se usa los corchetes <em>["posicion
                inicio": "posicion final": "saltos"] un elemento no colocada se entiende que es el valor por
                defecto</em></p>

        <pre
            v-highlightjs><code class="python">
texto="ruben es una persona que le gusta caminar"
texto[5] # trae el caracter en la posicion 5
texto[:5] # desde el primer elemento a la posicion 5
texto[13:] # desde la posicion 13 hasta el final
texto[13:20] #desde la posicion 13 hasta la 20

texto[0::2] #extrae el texto de dos en dos desde el inicio al final tambien se puede escribir texto[::2]
texto[::-1] #con numeros negativos invierte el recorido va desde el final al inicio en este caso invierte el texto</code></pre>
    </div>
</template>