Feature: Carrinho

Scenario: Adicionar múltiplos produtos ao carrinho - Verificar preço final
    Given Estou logado na amazon
    When Adiciono produto ao carrinho
    Then O preço final do meu carrinho é a soma dos itens adicionados

Scenario: Limpar carrinho
    Given Estou logado na amazon
    When Clico no carrinho
    Then Excluo produto do carrinho