// // // // // // const Aluno = {
// // // // // //   Nome: "Caio",
// // // // // //   Idade: 22,
// // // // // //   Endereço: ["Rua São Paulo", "Rua dos Bobos"],
// // // // // // };

// // // // // // console.log(Aluno.Nome);

// // // // // // Aluno.Nome = "João";

// // // // // // console.log(Aluno.Nome);

// // // // // // Exercício 1

// // // // // // const favoriteMovie = {
// // // // // //   directionInfo: "From DreamWorks",
// // // // // //   name: "Shrek",
// // // // // //   yearOfLaunch: 2001,
// // // // // //   cast: "The ogre",
// // // // // //   haveIWatchedIt: true,
// // // // // // };

// // // // // // console.log(
// // // // // //   favoriteMovie.directionInfo,
// // // // // //   favoriteMovie.name,
// // // // // //   favoriteMovie["yearOfLaunch"],
// // // // // //   favoriteMovie["cast"],
// // // // // //   favoriteMovie["haveIWatchedIt"]
// // // // // // );

// // // // // // Exercício 2

// // // // // // const person = {
// // // // // //   name: "Caio",
// // // // // //   age: 22,
// // // // // //   gender: "male",
// // // // // //   favoriteMusicType: "Pop rock",
// // // // // //   address: {
// // // // // //     street: "Rua São Paulo",
// // // // // //     number: 690,
// // // // // //     city: "São Leopoldo",
// // // // // //     state: "RS",
// // // // // //   },
// // // // // // };

// // // // // // console.log(person);

// // // // // // console.log(
// // // // // //   `O nome da pessoa é ${person.name}, sua idade é ${person.age}, seu gênero é ${person.gender} e seu estilo musical favorito é ${person.favoriteMusicType}.`
// // // // // // );

// // // // // const address1 = {
// // // // //   street: "Rua São Paulo",
// // // // //   number: 690,
// // // // //   city: "São Leopoldo",
// // // // //   state: "RS",
// // // // // };

// // // // // address1.CEP = "93010170";

// // // // // const address2 = {
// // // // //   ...address1,
// // // // // };

// // // // // address2.street = "Outra rua";
// // // // // address2.CEP = "12345678";

// // // // // const person = {
// // // // //   name: "Caio",
// // // // //   age: 22,
// // // // //   gender: "male",
// // // // //   favoriteMusicType: "Pop rock",
// // // // //   address: [address1, address2],
// // // // // };

// // // // // console.log(person);

// // // // // Exercício 1 de escrita

// // // // // const person1 = {
// // // // //   myName: "Caio",
// // // // //   nicknames: ["Caião", "Cainho", "Copo de suco"],
// // // // // };

// // // // // function tellMyNicknames(object) {
// // // // //   return `Eu sou ${object.myName}, mas pode me chamar de ${object.nicknames[0]}, ${object.nicknames[1]} ou ${object.nicknames[2]}.`;
// // // // // }

// // // // // const person2 = {
// // // // //   ...person1,
// // // // //   nicknames: ["Jarem", "Avatar", "Poste"],
// // // // // };

// // // // // console.log(tellMyNicknames(person2));

// // // // // Exercício 2

// // // // const person1 = {
// // // //   nome: "Caio",
// // // //   idade: 22,
// // // //   profissao: "Programador",
// // // // };

// // // // const person2 = {
// // // //   nome: "Alcimar",
// // // //   idade: 40,
// // // //   profissao: "Militar",
// // // // };

// // // // function returnInfoAboutPerson(chosenPerson) {
// // // //   return [
// // // //     chosenPerson.nome,
// // // //     chosenPerson.nome.length,
// // // //     chosenPerson.idade,
// // // //     chosenPerson.profissao,
// // // //     chosenPerson.profissao.length,
// // // //   ];
// // // // }

// // // // console.log(returnInfoAboutPerson(person1), returnInfoAboutPerson(person2));

// // // // Exercício 3

// // const carrinho = [];

// // const fruta1 = {
// //   nome: "Maçã",
// //   disponibilidade: true,
// // };

// // const fruta2 = {
// //   nome: "Banana",
// //   disponibilidade: true,
// // };

// // const fruta3 = {
// //   nome: "Morango",
// //   disponibilidade: false,
// // };

// // function adicionarAoCarrinho(frutaEscolhida) {
// //   carrinho.push(frutaEscolhida);
// // }

// // adicionarAoCarrinho(fruta1),
// //   adicionarAoCarrinho(fruta2),
// //   adicionarAoCarrinho(fruta3);

// // console.log(carrinho);

// // // Desafio 1

// // function printMyInfo() {
// //   const name = prompt("Qual seu nome?");
// //   const age = Number(prompt("Qual sua idade?"));
// //   const profession = prompt("Qual sua profissão?");
// //   const person = {
// //     name: name,
// //     age: age,
// //     profession: profession,
// //   };
// //   console.log([person, typeof person]);
// // }

// // printMyInfo();

// // // Desafio 2

// // function compareTwoMovies(firstMovie, secondMovie) {
// //   console.log(
// //     `Did ${firstMovie.name} launch before ${secondMovie.name}?`,
// //     (firstMovie.launchDate < secondMovie.launchDate) + ".",
// //     `And did ${firstMovie.name} launch the same year as ${firstMovie.name}?`,
// //     firstMovie.launchDate == secondMovie.launchDate
// //   );
// // }

// // const movie1 = {
// //   name: "Shrek",
// //   launchDate: 2000,
// // };

// // const movie2 = {
// //   name: "Frozen",
// //   launchDate: 2010,
// // };

// // compareTwoMovies(movie1, movie2);

// // Desafio 3

// const carrinho = [];

// const fruta1 = {
//   nome: "Maçã",
//   disponibilidade: true,
// };

// const fruta2 = {
//   nome: "Banana",
//   disponibilidade: true,
// };

// const fruta3 = {
//   nome: "Morango",
//   disponibilidade: false,
// };

// function adicionarAoCarrinho(frutaEscolhida) {
//   carrinho.push(frutaEscolhida);
// }

// adicionarAoCarrinho(fruta1),
//   adicionarAoCarrinho(fruta2),
//   adicionarAoCarrinho(fruta3);

// console.log(carrinho);

// function estahDisponivel(chosenFruit) {
//   console.log(
//     `A fruta ${chosenFruit.nome} está disponível?`,
//     chosenFruit.disponibilidade
//   );
// }

// estahDisponivel(fruta1);
// estahDisponivel(fruta2);
// estahDisponivel(fruta3);
