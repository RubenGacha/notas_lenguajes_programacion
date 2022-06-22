<template>
    <div id="cuerpo">
        <h1>Programacion orientada a objetos</h1>

        <h2>Clases</h2>
        <p>para crear una clase se usa la palabra clave <em class="enfasis">class</em> y para instanciar la clase se usa
            una variable
            que use algun constructor de la misma.</p>

        <p>los constructores de la clase se crean usando la palabra clave <em class="enfasis">__init__</em> y en cada
            funcion o metodo
            de la clase debe recibir la palabra clave <em class="enfasis">self</em> que hace referencia a si mismo es
            igual que
            <em class="enfasis">this</em> en otros lenguajes.
        </p>

        <pre v-highlightjs><code class="python">class Hotel:
    def __init__(self):
        pass
    def __init__(self,numero_cuartos):
        pass
    def __init__(selft,numero_cuartos,numero_pisos):
        pass

hotel=Hotel(15)</code></pre>

        <h2>modificador de acceso y propiedades</h2>
        <p>en python podemos cambiar el acceso a privado usando un guion bajo o doble guion bajo<em
                class="enfasis">_</em> o <em class="enfasis">__</em>
            antes de la propiedad o metodo.</p>

        <pre v-highlightjs><code class="python">class nombreclase:

    def __init__(self,privado,publico):
        self._privado=privado
        self.publico=publico

    def _metodoPrivado(self):
        pass
    def metodoPublico(self):
        pass</code></pre>

        <h2>Getter y setter</h2>
        <p>permite establecer o obtener las propiedades privadas de una clase.</p>

        <pre v-highlightjs><code class="python">class Auto:

    def __init__(self,matricula):
        self._matricula=matricula

    #getter
    def getMatricula(self):
        return self._matricula

    #setter    
    def metodoPublico(self,matricula):
        self._matricula=matricula</code></pre>


        <h2>funcion decoradora @property</h2>

        <p>se puede usar la funcion <em class="enfasis">property</em> para indicar cuales seran las funciones que usara
            para el getter,
            el setter, y eliminar un atributo de una clase incluso se puede documentar.
            <em class="enfasis">property(fget,fset,fdel,fdoc)</em>
        </p>

        <ul>
            <li><em>fget: </em> recibe la funcion del getter</li>
            <li><em>fset: </em> recibe la funcion del setter</li>
            <li><em>fdel: </em> recibe la funcion de delete</li>
            <li><em>fdoc: </em> recibe un docstring</li>
        </ul>

        <pre v-highlightjs><code class="python">class Millas:
    def __init__(self):
        self._distancia = 0
    
    # Función para obtener el valor de _distancia
    def obtener_distancia(self):
        print("Llamada al método getter")
        return self._distancia
    
    # Función para definir el valor de _distancia
    def definir_distancia(self, recorrido):
        print("Llamada al método setter")
        self._distancia = recorrido
    
    # Función para eliminar el atributo _distancia
    def eliminar_distancia(self):
        del self._distancia
    
    distancia = property(obtener_distancia, definir_distancia, eliminar_distancia)</code></pre>

        <p>el decorador <em class="enfasis">@property</em> facilita el trabajo con propiedades privadas haciendo que se
            trate las
            funciones getter y setter como propiedades.</p>
        <pre v-highlightjs><code class="python">#funcion getter
@property
def password(self):
    return self._password

#funcion setter
@password.setter
def password(self,valor):
    self._password=valor
        </code>
    </pre>

        <h2>Metodos estaticos</h2>

        <p>los metodos estaticos le pertenecen a la clase y no a la instancia</p>

        <pre v-highlightjs><code class="python">class Math:
    @staticmethod
    def pi():
        return 3.1416
    
print(Math.pi())</code></pre>

        <h2>Herencia</h2>

        <p>Cuando una clase hereda de otra, adquiere los atributos y metodos de la primera. La clase original se llama
            clase padre(SuperClase) y la nueva clase es la clase hija(subClase). la clase hijo puede herredar cualquier
            o todos los atributos y metodos de su clase padre, pero tambien es libre de definir nuevos atributos y
            metodos propios.</p>

        <p>para poder usar los metodos y propiedades de la superClase se usa la palabra clave <em
                class="enfasis">super()</em></p>
        <pre v-highlightjs><code class="python">class SuperClase:
    def __init__(self):
        pass

class subClase(superClase):
    def __init__(self):
        super().__init__(self)</code></pre>

        <h3>Herencia Multiple</h3>

        <p>en python se puede heredar de varias clases padre pero el constructor que hereda es del primera clase de que
            hereda.</p>

        <pre v-highlightjs><code class="python">
            class SuperClase_a:
                def __init__(self):
                    pass
            class SuperClase_b:
                def __init__(self):
                    pass
            class subClase(superClase_a,superClase_b):
                def __init__(self):
                    super().__init__(self)</code></pre>

        <h2>Polimorfirmo</h2>
        <p>se trata de cambiar el comportamiento de un metodo heredado para hacerlo mas especifico a la clase que
            hereda.</p>

        <pre v-highlightjs><code class="python">class persona:
    def __init__(self,nombre):
        self.nombre=nombre
    def avanza(self):
        print('Ando caminando')

class ciclista(persona):
    def __init__(self,nombre)
        super().__init__(nombre)
    def avanza(self):
        print('ando moviendome en mi bicicleta')</code></pre>

        <div class="importante"><em>Nota: </em>
            <ul>
                <li><em>Herencia:</em> copy paste</li>
                <li><em>Polimorfirmo:</em> copy paste edit</li>
            </ul>
        </div>

        <h2>isinstance()</h2>

        <p>nos permite saber si un objeto es una instancia de una clase especifica devuelve true o false.</p>

        <pre v-highlightjs><code class="python">class persona:
    def __init__(self,nombre):
        self.nombre=nombre
    def avanza(self):
        print('Ando caminando')

ruben=persona("ruben")

print(isinstance(ruben,persona))</code></pre>
    </div>
</template>