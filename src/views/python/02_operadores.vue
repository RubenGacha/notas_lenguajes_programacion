<template>
    <div id="cuerpo">
        <h1>Operadores en python</h1>

        <h2>Operadores Aritmeticos</h2>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">operador</th>
                    <th scope="col">simbolo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">suma</td>
                    <td scope="row">+</td>
                </tr>
                <tr>
                    <td scope="row">resta</td>
                    <td scope="row">-</td>
                </tr>
                <tr>
                    <td scope="row">multiplicacion</td>
                    <td scope="row">*</td>
                </tr>
                <tr>
                    <td scope="row">division</td>
                    <td scope="row">/</td>
                </tr>
                <tr>
                    <td scope="row">modulo</td>
                    <td scope="row">%</td>
                </tr>
                <tr>
                    <td scope="row">Exponete</td>
                    <td scope="row">**</td>
                </tr>
                <tr>
                    <td scope="row">Division entera</td>
                    <td scope="row">//</td>
                </tr>
            </tbody>
        </table>

        <h2>Operadores de Comparacion</h2>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">operador</th>
                    <th scope="col">simbolo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">Igual que</td>
                    <td scope="row">==</td>
                </tr>
                <tr>
                    <td scope="row">Diferente que</td>
                    <td scope="row">!=</td>
                </tr>
                <tr>
                    <td scope="row">Mayor que</td>
                    <td scope="row"> &#62; </td>
                </tr>
                <tr>
                    <td scope="row">Menor que</td>
                    <td scope="row"> &#60; </td>
                </tr>
                <tr>
                    <td scope="row">Mayor o igual que</td>
                    <td scope="row"> &#62;= </td>
                </tr>
                <tr>
                    <td scope="row">Menor o igual que</td>
                    <td scope="row"> &#60;= </td>
                </tr>
            </tbody>
        </table>

        <h2>Operadores Logicos</h2>
        <ul>
            <li>AND</li>
            <li>OR</li>
            <li>NOT</li>
        </ul>

        <h2>Operadores de asignacion</h2>

        <p>estos operadores nos permite usar el valor de la variable y operarlo por lo que queremos es lo mismo que
            escribir <code>variable=variable+1</code> que <code>variable+=1</code> el unico que no opera el valor de la
            variable es el de <em class="enfasis">igualacion</em>. </p>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">operador</th>
                    <th scope="col">simbolo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">igual</td>
                    <td scope="row">=</td>
                </tr>
                <tr>
                    <td scope="row">preincremento</td>
                    <td scope="row">+=</td>
                </tr>
                <tr>
                    <td scope="row">decremento</td>
                    <td scope="row">-=</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td scope="row">*=</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td scope="row">/=</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td scope="row">%=</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td scope="row">**=</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td scope="row">//=</td>
                </tr>
            </tbody>
        </table>
        <pre v-highlightjs><code class="python">variable=3
variable+=1
variable/=2</code></pre>

        <p>En python existe la asignacion multiple en una linea se agrupan los valores que se les asigna un valor al
            lado izquierdo del igual y los valores al lado derecho separados por comas. en este caso se le asigna el
            valor de a tanto a b como a c</p>

        <pre v-highlightjs><code class="python">a=3
b,c=a,d</code></pre>

    </div>
</template>