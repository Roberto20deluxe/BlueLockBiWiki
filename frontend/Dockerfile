FROM node:20
#FROM é a instrução que define a imagem base do container, fornecendo o ambiente necessário para rodar a aplicação.

WORKDIR /app
#WORKDIR é abreviação de work directory, aqui você define onde todos comandos seguintes serão executados no container

COPY package*json ./ 
#Copy é para copiar as dependências. Recebe dois argumentos: o primeiro é o arquivo das dependências e o segundo é onde você quer copiar no container.

RUN npm install
#RUN é basicamente acessar o terminal, em seguida é fornecido o comando para instalar as dependências do projeto

COPY . .
#O Copy aqui serve para copiar todos os arquivos da aplicação para dentro do container, ele não ignora node_modules. Utilize .dockerignore se precisar

ENV PORT=5173
#ENV serve para definir variáveis de ambiente dentro do container, aqui definimos a porta em que o servidor irá rodar

EXPOSE 5173
#EXPOSE serve para definir a qual porta o container vai escutar, ou seja, ENV e EXPOSE são complementares

CMD ["npm", "run", "dev"]
#CMD define o comando que vai ser executado ao iniciar o container, nesse caso rodamos npm run dev para inicializar o frontend