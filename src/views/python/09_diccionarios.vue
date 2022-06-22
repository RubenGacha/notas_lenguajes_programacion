<template>
    <div id="cuerpo">
        <h1>Diccionarios en python</h1>

        <p>Son estructuras de datos que permite guardar dos valores el primero es la llave y la segunda el valor.</p>

        <pre v-highlightjs><code class="python">diccionario={
    1:"uno",
    2:"dos",
    3:"tres"
}</code></pre>


        <h2>Metodos de los diccionarios</h2>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">metodo</th>
                    <th scope="col">descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">nombreDiccionario[key]=valor</td>
                    <td scope="row">asigna o crea el valor dado en el diccionario</td>
                </tr>
                <tr>
                    <td scope="row">del nombreDiccionario[key]</td>
                    <td scope="row">elimina la llave y el valor del diccionario</td>
                </tr>
                <tr>
                    <td scope="row">nombreDiccionario.keys()</td>
                    <td scope="row">devuelve todas las llaves del diccionario</td>
                </tr>
                <tr>
                    <td scope="row">nombreDiccionario.values()</td>
                    <td scope="row">devuelve todos los valores del diccionario</td>
                </tr>
                <tr>
                    <td scope="row">nombreDiccionario.items()</td>
                    <td scope="row">devuelve los valores llave valor</td>
                </tr>
                <tr>
                    <td scope="row">len(nombreDiccionario)</td>
                    <td scope="row">devuelve el tamaño del diccionario</td>
                </tr>
            </tbody>
        </table>

        <pre v-highlightjs><code class="python">
diccionario={1:"uno",2:"dos",3:"tres"}
for key,value in diccionario.items():
    print(f"la llave es {key} y su valor es {value}")</code></pre>

        <h2>dictionary comprehensions</h2>
        <pre v-highlightjs><code class="python">diccionario={i: i**3 for i in range(1,101) if i%3!=0}</code></pre>
        <p>igual que en la listas se componen de tres partes</p>
        <ul>
            <li><em>i:i**3</em>: en la parte de valor se debe colocar la llave y el valor a colocar. ya que son
                necesarios en la cracion de diccionarios</li>
            <li><em>for i in range(1,101)</em>: para los valores de 1 a 100 el (ciclo for)</li>
            <li><em>if i %3 !=0</em> condicion a cumplir para cada elemento, solo se pondran llave valor cuando se
                cumplan la condicion y esta parte es (opcional) </li>
        </ul>
    </div>
</template>