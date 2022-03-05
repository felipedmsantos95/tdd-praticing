# TDD Praticing



## English

### Data
Event ID

### Main Flow

1. Obtain data from last event group (end date and review duration)
2. Return "active" status if event hasn't done yet

### Alternative Flow: Event is on closure limit
1. Return "active" status

### Alternative Flow: Event done, but is inside on event review period
1. Return "inReview" status

### Alternative Flow: Event and event review period done
1. Return "done" status

### Alternative Flow: Group hasn't any event appointed
1. Return "done" status




## Português
### Dados
ID produto

### Fluxo primario

1. Obter dados do ultimo evento do grupo (data de termino e duracao do mercado de notas)
2. Retornar status "ativo" se o evento ainda nao foi encerrado

### Fluxo alternativo: Evento está no limite do encerramento
1. Retornar status ativo

### Fluxo alternativo: Evento encerrado, mas está dentro do período do mercado de notas
1. Retornar status "em revisão"

### Fluxo alternativo: Evento e mercado das notas encerrados
1. Retornar status "encerrado"

### Fluxo alternativo: Grupo não tem nenhum evento marcado
1. Retornar status "encerrado"

