<template>
    <div id="cuerpo">
        <h1>Bucles en python</h1>

        <h2>Bucle while</h2>

        <pre v-highlightjs><code class="python">LIMITE=5
contador=0
while contador &#60; LIMITE:
    print("hola mundo")
    contador+=1</code></pre>

        <h2>Bucle For</h2>
        <p>En algunos casos queremos crear listas de datos para recorrer y estas listas se suelen recorrer usando el
            bucle for. para esto usamos la funcion <em class="enfasis">range()</em> que crea estas listas</p>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">tipo</th>
                    <th scope="col">descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">range(5)</td>
                    <td scope="row">crea una lista de 0 al 4</td>
                </tr>
                <tr>
                    <td scope="row">range(5,10)</td>
                    <td scope="row">crea una lista del 5 al 10</td>
                </tr>
                <tr>
                    <td scope="row">range(5,45,5)</td>
                    <td scope="row">crea una lista del 5 al 45 de 5 en 5</td>
                </tr>
            </tbody>
        </table>

        <pre v-highlightjs><code class="python">for i in range(5):
    pass

for i in range(len("este es un texto")):
    pass</code></pre>

        <h2>continue y break</h2>
        <p>son dos palabras claves una salta a la siguiente iteracion y el otro sale del ciclo.</p>

        <pre v-highlightjs><code class="python">for i in range(10000):
    if i % 2 != 0:
        continue
    
    if i==5000:
        break
    
    print(i)</code></pre>
    </div>
</template>