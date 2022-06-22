<template>
    <div id="cuerpo">
        <h1>Iterables</h1>

        <p>En Python, un iterable es un objeto que se puede utilizar en un bucle definido. Si un objeto es iterable
            significa que se puede pasar como argumento a la función iter. El iterable que se pasa como parámetro a la
            función iter regresa un iterator.</p>

        <pre v-highlightjs><code class="python">iter('cadena') # cadena
iter(['a', 'b', 'c']) # lista
iter(('a', 'b', 'c')) # tupla
iter({'a', 'b', 'c'}) # conjunto
iter({'a': 1, 'b': 2, 'c': 3}) # diccionario</code></pre>

        <p>Todas las llamadas anteriores regresan un objeto de tipo iterator.</p>

        <h2>¿Qué pasa si le pasamos a la función iter un objeto que no es iterable?</h2>

        <p>Obtendremos un TypeError que señala que el objeto no es un iterable. Esto es un ejemplo de programación
            defensiva en el que Python verifica el tipo del objeto antes de proceder al cómputo.</p>

        <p>Es importante señalar que estos no son los únicos tipos de objetos que pueden ser iterable. Existen gran
            cantidad de ejemplos en la librería estándar y, de hecho, casi cualquier objeto se puede convertir en un
            iterable.</p>

        <h2>Iterators</h2>

        <p>Ahora que ya sabemos cómo obtener un iterator, ¿Qué podemos hacer con él? Un iterator es un objeto que
            regresa sucesivamente los valores asociados con el iterable.</p>

        <pre v-highlightjs><code class="python">frutas = ['manzana', 'pera', 'mango']
iterador = iter(frutas)
next(iterador)</code></pre>
        <p>Como puedes ver, el iterator guarda el estado interno de la iteración, de tal manera que cada llamada
            sucesiva a next regresa el siguiente elemento. ¿Qué pasa una vez que ya no existan más elementos en el
            iterable? La llamada a next arrojará un error de tipo StopIteration.</p>
    </div>
</template>