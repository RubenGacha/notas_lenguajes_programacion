<template>
    <div id="cuerpo">
        <h1>Funciones en python</h1>

        <p>Las funciones en python se declara con la palabra reservada <em class="enfasis">def</em> y las lineas de
            código que hacen
            parte de esta funcion deben estar indexadas.</p>

        <p>cuando se quiere devolver un valor se usa la palabra clave <em class="enfasis">return</em> se debe recordar
            que python pasa
            los valores por referencia</p>

        <h2>funcion sin parametros</h2>
        <pre v-highlightjs><code class="python">
#declaracion de la funcion
def nombrefuncion():
    pass
#invocacion de la funcion
nombrefuncion()</code></pre>

        <h2>funcion con parametros</h2>
        <pre v-highlightjs><code class="python">
#declaracion de la funcion
def nombrefuncion(parametro):
    print(parametro)
#invocacion de la funcion
nombrefuncion("hola mundo")
        </code></pre>

        <h2>funcion con return</h2>
        <pre v-highlightjs><code class="python">
#declaracion de la funcion
def nombrefuncion(a,b):
    suma=a+b
    return suma
#invocacion de la funcion
nombrefuncion(5,8)
        </code></pre>
    </div>
</template>