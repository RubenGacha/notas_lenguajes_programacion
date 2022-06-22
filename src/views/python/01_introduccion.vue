<template>
    <div id="cuerpo">
        <h1>Introduccion</h1>

        <ul>
            <li>Fue creado por Guido van Rossum a comienzos de los 90</li>
            <li>lenguaje de alto nivel con una gramatica sencilla, clara y muy legible</li>
            <li>tipado dinamico y fuerte</li>
            <li>orientado a objetos</li>
            <li>codigo open Source</li>
            <li>multiplataforma</li>
            <li>interpretado</li>
            <li>multiproposito</li>
            <li>multiparadigma</li>
            <li>multihilo</li>
            <li>case sensitive</li>
        </ul>
        <h2>Estructura base</h2>

        <p>python no tiene una estructura base se puede iniciar en cualquier editor de texto teniendo en cuenta que debe
            tener extension .py y el programa python para poder interpretarlo.</p>

        <p>En una consola o terminal podemos ejecutar nuestro codigo de la siguiente forma.</p>

        <pre v-highlightjs><code class="python">py "Nombre_archivo.py"</code></pre>

        <h2>Variables, comentarios y Constantes</h2>

        <p>En Phyton solo se tiene que dar un nombre a la variable que normalmente se usa el estilo lowercamelcase. por
            otro lado si se desea saber el tipo de dato de estas variables se usa <em class="enfasis">type()</em></p>

        <p>cuando escribes el nombre de una variable en mayuscula podemos suponer que es una constante. por buenas
            practicas</p>

        <pre v-highlightjs><code class="python">'''
las comillas simples permiten crear comentarios de varias lineas
y el simbolo numeral permite crear comentarios de una linea
'''
nombre="ruben" #variable de tipo string
edad=30 #variable de tipo numerico
texto="""cuando se quiere escribir un texto
de multiples lineas en una variable
se debe usar 3 veces comillas dobles.
"""
FIJO="mueres"
print(type(nombre))
print(type(edad))
print(type(texto))</code></pre>

        <h2>Tipos de datos primitivos en python</h2>
        <p>En python existe cuatro tipos de datos primitivos: </p>
        <ul>
            <li>Numeros enteros <em class="enfasis">int()</em></li>
            <li>Numeros de punto flotante <em class="enfasis">float()</em></li>
            <li>Texto (cadenas de caracteres) <em class="enfasis">str()</em></li>
            <li>Booleanos (True y False) <em class="enfasis">bool()</em> en python debe ser en mayuscula la primera para
                que tome el valor booleano</li>
        </ul>

        <h2>Entrada y salida en consola</h2>
        <p>se tiene una entrada que ingresa el valor siempre como texto que es <em class="enfasis">input()</em> y una
            salida que es <em class="enfasis">print()</em> aunque este ultimo tiene varios formatos.</p>

        <pre v-highlightjs><code class="python">
nombreVariable=input("Escribe tu nombre") #entrada
print("hola mundo") #escribe en consola hola mundo

#escribe en consola hola mundo pero al finalizar no da enter sino lo que se especifique en end.
print("hola mundo",end="") 
print(f"hola {nombreVariable}") #formatea el texto permitiendo el ingreso del valor de la variable
print(r"C:\algun\nombre") #escapa el carracte \ para que no lo interprete como caracter especial.</code></pre>

        <h2>Conversion de datos</h2>

        <p>Para pasar de un tipo a otro solo se debe usar la case del tipo de valor primitivo y este cambiara su tipo se
            debe recordar que la conversion sea logica ya que "a" no puede convertirse en un numero</p>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">comando</th>
                    <th scope="col">descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">int("10")</td>
                    <td scope="row">Convertir el string numerico en numero</td>
                </tr>
                <tr>
                    <td scope="row">float("10.8")</td>
                    <td scope="row">Convertir el string numerico en numero flotante</td>
                </tr>
                <tr>
                    <td scope="row">str(1)</td>
                    <td scope="row">Convertir un valor numerico a string</td>
                </tr>
                <tr>
                    <td scope="row">bin(10)</td>
                    <td scope="row">Convierte un valor decimal a binario</td>
                </tr>
                <tr>
                    <td scope="row">hex(10)</td>
                    <td scope="row">Convierte un valor decimal a hexadecimal</td>
                </tr>
                <tr>
                    <td scope="row">int("0b1010",2)</td>
                    <td scope="row">Convierte un valor binario a decimal</td>
                </tr>
                <tr>
                    <td scope="row">int("0xa",16)</td>
                    <td scope="row">Convierte un valor hexadecimal a decimal</td>
                </tr>
                <tr>
                    <td scope="row">abs(-10)</td>
                    <td scope="row">muestra el valor absoluto de un numero</td>
                </tr>
                <tr>
                    <td scope="row">round(5.5)</td>
                    <td scope="row">redondea un numero a entero</td>
                </tr>
                <tr>
                    <td scope="row">round(15.565485484,2)</td>
                    <td scope="row">redondea un numero y le deja dos decimales</td>
                </tr>
            </tbody>
        </table>

        <pre v-highlightjs><code class="python">
numero="5.4"
int(numero)
float(numero)
str(numero)
bool(0) #bool convierte solo 0 y 1 a false a true</code></pre>

        <h2>Otros tipos numericos</h2>
        <ul>
            <li>Decimal</li>
            <li>Fraction</li>
            <li>Complejos usando j como la parte imaginaria: 3+4j</li>
        </ul>
    </div>


</template>
