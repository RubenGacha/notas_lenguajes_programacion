<template>
    <div id="cuerpo">
        <h1>Funciones lambda o anonimas en python</h1>

        <p>las funciones lambda tambien llamadas <em class="enfasis">on the go</em>, <em class="enfasis">on demand</em>,
            <em class="enfasis">online</em> o
            <em class="enfasis">anonimas.</em> son funciones cortas que se guardan en una variable que facilita la
            creacion de estas ya
            que se divide en tres partes.
        </p>

        <ul>
            <li><em>palindrome</em>: nombre de la funcion es la variable a usar cuando se quiere usar la funcion.</li>
            <li><em>lambda palabra:</em> son los parametros que resibe la funcion en este caso solo va a ser palabra
                pero si se quiere mas parametros se separan por comas y al finalizar se coloca los dos puntos.</li>
            <li><em>palabra==palabra[::-1]</em>: el valor a retornar en este caso true o false </li>
        </ul>

        <pre v-highlightjs><code class="python">#creacion funcion lambda
palindrome= lambda palabra:palabra==palabra[::-1]

#invocando la funcion
palindrome("ruben")</code></pre>

        <p>la siguiente funcion es un lambda sin parametros. aunque no tiene sentido usarlas no he encontrado el caso en
            que se usen sin parametros.</p>
<pre v-highlightjs><code class="python">#creacion funcion lambda
miNombre= lambda:"ruben"

#invocando la funcion
print(miNombre())</code></pre>
    </div>
</template>