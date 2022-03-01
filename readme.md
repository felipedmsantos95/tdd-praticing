# TDD Praticing

## Dados
ID produto

## Fluxo primario

1. Obter dados do ultimo evento do grupo (data de termino e duracao do mercado de notas)
2. Retornar status "ativo" se o evento ainda nao foi encerrado


## Fluxo alternativo: Evento está no limite do encerramento
2. Retornar status ativo

## Fluxo alternativo: Evento encerrado, mas está dentro do período do mercado de notas
2. Retornar status "em revisão"


## Fluxo alternativo: Evento e mercado das notas encerrados
2. Retornar status "encerrado"

## Fluxo alternativo: Grupo não tem nenhum evento marcado
2. Retornar status "encerrado"



