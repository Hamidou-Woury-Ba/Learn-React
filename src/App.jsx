import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreetings from "./UserGreetings"
import List from "./List"
import Boutton from "./Boutton"
import ProfilePicture from "./ProfilePicture"
import Counter from "./Counter"
import MyComponent from "./MyComponent"
import MyComponentForm from "./MyComponentForm"
import ColorPicker from "./ColorPicker"
import MyCarComponent from "./MyCarComponent"
import ImportArrayListComponent from "./ImportArrayListComponent"
import MyCarObjectComponent from "./MyCarObjectComponent"
import ToDoList from "./ToDoList"
import MyUseEffectComponent from "./MyUseEffectComponent"


/*React hook
  React hook : fonction spéciale qui permet aux composants fonctionnels d’utiliser React future sans écrire de composant de classe
*/

/*useState()
  useState : Un hook react qui permet la création d’une variable avec état et une fonction settler pour mettre à jour sa valeur dans un DOM virtuel
*/

/*Fonction de mise à jour : 
    Une fonction en tant qu’argument de setState() généralement
    Autoriser des mises à jour sécurisées en fonction de l’état précédent
    Utilisé avec plusieurs mises à jour d’état et fonctions asynchrones
    Bonne pratique d’utilisation des fonctions de mise à jour
*/

/*useEffect(function, [dependencies])
  Hook React qui dit à React de faire du code quand (choisissez-en un) : 
    Ce composant effectue un nouveau rendu
    ce composant monte
    l’état d’une valeur change

    1. useEffect(() => {}) exécuter après chaque re-rendu
    2. useEffect(() => {}, []) exécuter lorsque qu'il monté
    3. useEffect(() => {}, [value]) exécuter lorsque qu'il monté et lorsque le valeur change
*/

function App() {

  /* List 
  const fruits = [
    { id : 1, name : "apple", colories : "95"}, 
    { id : 2, name : "orange" , colories : 45}, 
    { id : 3, name : "banana" , colories : 105}, 
    { id : 4, name : "coconut" , colories : 159}, 
    { id : 5, name : "pinapple" , colories : 37}
  ]

  const vegetables = [
    { id : 6, name : "potatoes", colories : 110}, 
    { id : 7, name : "celery" , colories : 15}, 
    { id : 8, name : "carrots" , colories : 25}, 
    { id : 9, name : "corn" , colories : 63}, 
    { id : 10, name : "broccoli" , colories : 50}
  ]

  On me ce code dans le return
  {fruits.length > 0 && <List items={fruits} category = "Fruits"/>} 
  {vegetables.length > 0 && <List items={vegetables} category = "Vegetables"/>} 

    */

  return (
    <>
      <MyUseEffectComponent />
    </>
  )
}

export default App
