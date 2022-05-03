# SWAPI Integration
Reto técnico de Indra - Backend NodeJs

https://swapi.py4e.com/

## Indicaciones Previas
* Configure sus credenciales aws: aws_access_key_id y aws_secret_access_key
* Por defecto se usa el perfil "default", pero puede cambiarlo en el archivo serverless.yml (linea 9)

## Ejecución / Despliegue
Para ejecutar en local:
```sh
sls offline
```

Para desplegar en AWS
```sh
sls deploy
```
 O, si desaa ver el despliegue con más detalle
 ```sh
sls deploy --verbose
```

## Demo
Endpoints:

1 Obtiene la lista de planetas registradas en DynamoDb:
* GET - https://8kecrztui6.execute-api.us-west-2.amazonaws.com/dev/planet

2 Obtiene un planeta registrado en DynamoDb
* GET - https://8kecrztui6.execute-api.us-west-2.amazonaws.com/dev/planet/{id}

3 Guarda un planeta en DynamoDb
* POST - https://8kecrztui6.execute-api.us-west-2.amazonaws.com/dev/planet

Ejemplo del body
 ```sh
{
	"diametro": "10465",
	"periodo_rotacion": "23",
	"periodo_orbital": "304",
	"gravedad": "1 standard",
	"poblacion": "200000",
	"clima": "arid",
	"terreno": "desert",
	"superficie_agua": "1",
	"url": "https://swapi.py4e.com/api/planets/1/",
	"creado": "2014-12-09T13:50:49.641000Z",
	"editado": "2014-12-20T20:58:18.411000Z"
}
```

4 Obtiene la lista de planetas de SWAPI
* GET - https://8kecrztui6.execute-api.us-west-2.amazonaws.com/dev/planet-sw

5 Obtene un planeta de SWAPI
* GET - https://8kecrztui6.execute-api.us-west-2.amazonaws.com/dev/planet-sw/{id}

## Nota
* La documentación con Swagger no está completa
* No hay tests
* Usar propiedades en español no es una buena práctica