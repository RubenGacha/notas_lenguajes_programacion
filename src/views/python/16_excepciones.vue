<template>
    <div id="cuerpo">
        <h1>Excepciones en python</h1>

        <h2>Capturar Excepciones</h2>
        <p>las Excepciones ocurren en tiempo de ejecucion. y para lograr capturarlas se usa la sentencia try except</p>

        <pre v-highlightjs><code class="python">try:
    pass
except nombreExcecion:
    pass</code></pre>

        <p>Si se quiere capturar el evento del error se tiene que asignar una variable al evento. con la palabra clave
            <em class="enfasis">as</em>
        </p>

        <pre v-highlightjs><code class="python">try:
    pass
except nombreExcecion as e:
    pass</code></pre>

        <p>en algunas ocaciones se necesita que se ejecute un trozo de codigo asi hubiese ocurrido una excepcion. como
            cerrar archivos, cerrar conexiones o liberar recursos.</p>

        <pre v-highlightjs><code class="python">try:
    pass
except nombreExcecion as e:
    pass
finally:
    pass</code></pre>

        <h2>Lanzar excepciones</h2>

        <p>para lanzar una excepcion en python se usa la palabra clave <em class="enfasis">raise</em> seguido de un tipo de excepcion en
            python</p>

        <pre v-highlightjs><code class="python">raise TypeError("mensaje")
raise ZeroDivisionError("mensaje")
raise ValueError("mensaje")</code></pre>

        <h2>Afirmaciones (assert Statements)</h2>

        <p>se puede leer una afirmacion como afirmo que condicion y sino envia el siguiente Error.</p>

        <pre v-highlightjs><code class="python">def palindrome(string)
    assert len(string)>0,"No se puede ingresar una cadena vacia"
    return string==string[::-1]</code></pre>
    </div>
</template>