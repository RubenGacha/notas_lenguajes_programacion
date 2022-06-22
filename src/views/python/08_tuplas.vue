<template>
    <div id="cuerpo">
        <h1>Tuplas en python</h1>

        <p>Son estructuras de datos inmutables que se ejecutan mas rapido que las listas ya que no se puede agregar ni
            eliminar valores de estas tuplas.</p>

        <pre v-highlightjs><code class="python">nombreTupla=(1,2,3,4,5,6)</code></pre>

        <h2>Slider</h2>
        <p>igual que con los textos podemos usar los sleder pero de vez de tratar con caracteres trata con valores</p>

        <pre
            v-highlightjs><code class="python">numeros=(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
            
numeros[5] # trae el elemento en la posicion 5
numeros[:5] # desde el primer elemento al elemento 5
numeros[13:] # desde el elemento 13 hasta el elemento final
numeros[13:20] #desde el elemento 13 hasta la 20

numeros[0::2] #extrae los elementos de dos en dos[::2]
numeros[::-1] #con numeros negativos invierte el recorrido va desde el elemento final hasta el primer elemento</code></pre>

        <h2>Metodos de las tuplas</h2>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">metodo</th>
                    <th scope="col">descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">elemento in tupla</td>
                    <td scope="row">valida la existencia de un elemento en la tupla</td>
                </tr>
                <tr>
                    <td scope="row">count(elemento)</td>
                    <td scope="row">trae la cantidad de veces que existe el elemento en la tupla</td>
                </tr>
                <tr>
                    <td scope="row">len(tupla)</td>
                    <td scope="row">saber el tamaño de la tupla</td>
                </tr>
                <tr>
                    <td scope="row">tuple(NombreLista)</td>
                    <td scope="row">convertir una lista a tupla</td>
                </tr>
            </tbody>
        </table>

        <pre v-highlightjs><code class="python">numeros=(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
if 10 in numeros:
    print("el numero 10 existe en la tupla")
numeros.count(5)</code></pre>

        <h2>Operaciones con tuplas</h2>

        <p>Se pueden usar dos operadores usando tuplas el <em>+</em> que concatenara las tupla y <em>*</em> que
            multiplicara la tupla la cantidad de veces que necesitemos</p>


        <pre v-highlightjs><code class="python">numeros1=[1,2,3,4,5]
numeros2=[6,7,8,9,10]
numerostotal=numeros1+numeros2 #concatena la tupla
numerostotal*3 #concatena 3 veces la tupla multiplicada</code></pre>

        <h2>Desenpaquetado</h2>
        <p>para lograr pasar los valores de una tupla a variables se debe crear la misma cantidad de variables que
            elementos de la tupla</p>
        <pre v-highlightjs><code class="python">tupla=("ruben",30)
nombre,edad=tupla</code></pre>
    </div>
</template>