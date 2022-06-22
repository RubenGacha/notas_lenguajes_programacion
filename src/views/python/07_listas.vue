<template>
    <div id="cuerpo">
        <h1>Listas en python</h1>

        <p>Es una estructura de datos que nos permite almacenar multiples datos. la forma en que se crean en python es
            de la siguiente manera:</p>

        <pre v-highlightjs><code class="python">nombreLista=[1,2,3,4,5,6]
nombreLista=[]
        </code></pre>

        <h2>Slider</h2>
        <p>igual que con los textos podemos usar los sleder pero de vez de tratar con caracteres trata con valores</p>

        <pre
            v-highlightjs><code class="python">numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

numeros[5] # trae el elemento en la posicion 5
numeros[:5] # desde el primer elemento al elemento 5
numeros[13:] # desde el elemento 13 hasta el elemento final
numeros[13:20] #desde el elemento 13 hasta la 20

numeros[0::2] #extrae los elementos de dos en dos[::2]
numeros[::-1] #con numeros negativos invierte el recorrido va desde el elemento final hasta el primer elemento</code></pre>

        <h2>Metodos de las listas</h2>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">metodo</th>
                    <th scope="col">descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">append(elemento)</td>
                    <td scope="row">agrega un elemento al final de la lista</td>
                </tr>
                <tr>
                    <td scope="row">insert(posicion,elemento)</td>
                    <td scope="row">agrega un elemento a la lista en una posicion determinada</td>
                </tr>
                <tr>
                    <td scope="row">extend([elemento,elemento])</td>
                    <td scope="row">agrega una lista a otra lista o agrega multiples elementos</td>
                </tr>
                <tr>
                    <td scope="row">index(elemento)</td>
                    <td scope="row">busca el primer elemento que sea igual al elemento pasado y trae su posicion</td>
                </tr>
                <tr>
                    <td scope="row">elemento in lista</td>
                    <td scope="row">es la forma en que se pregunta si existe un elemento buscado en una lista dada
                        devuelve true o
                        false</td>
                </tr>
                <tr>
                    <td scope="row">remove(elemento)</td>
                    <td scope="row">elimina el primer elemento que se parezca al que se pasa</td>
                </tr>
                <tr>
                    <td scope="row">pop()</td>
                    <td scope="row">elimina el ultimo elemento de la lista</td>
                </tr>
                <tr>
                    <td scope="row">pop(5)</td>
                    <td scope="row">elimina el elemento en la posicion 5</td>
                </tr>
                <tr>
                    <td scope="row">list(tupla)</td>
                    <td scope="row">convertir una tupla a lista</td>
                </tr>
            </tbody>
        </table>

        <pre v-highlightjs><code class="python">numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
numeros.append(21)
numeros.extend([22,23,24,25,26,27,28])
if 30 in numeros:
    print("el numero 30 existe en la lista")</code></pre>

        <h2>Operaciones con listas</h2>

        <p>Se pueden usar dos operadores usando listas el <em>+</em> que concatenara las listas y <em>*</em> que
            multiplicara la lista la cantidad de veces que necesitemos</p>


        <pre v-highlightjs><code class="python">numeros1=[1,2,3,4,5]
numeros2=[6,7,8,9,10]
numerostotal=numeros1+numeros2 #concatena la lista
numerostotal*3 #concatena 3 veces la lista multiplicada</code></pre>

        <h2>list comprehensions</h2>
        <p>nos permite crear listas de una forma abreviada usando un ciclo for y el valor deseado.</p>
        <pre
            v-highlightjs><code class="python">list_comprehensions=[i**2 for i in range(1,101) if i % 3 !=0]</code></pre>
        <p>este codigo se compone de 3 partes</p>
        <ul>
            <li><em>i**2</em>: valor a colocar en la lista</li>
            <li><em>for i in range(1,101)</em>: para los valores de 1 a 100 el (ciclo for)</li>
            <li><em>if i %3 !=0</em> condicion a cumplir para cada elemento, solo se pondran en la lista los elementos
                que cumplan la condicion y esta parte es (opcional) </li>
        </ul>

        <div class="importante">
            <p><em>Nota:</em> se debe recordar que cuando se iguala una lista con otra esta queda apuntando a su
                direccion NO hace una copia de esta. como sucede en las variables.</p>
        </div>
    </div>
</template>