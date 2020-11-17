/*
1 .aval az hame yek ghaleb  (var & eventlisterner & function misazim)
2.fn baraie note jadiid (newNote) => da an baraie inke az safhe feli naparad az yek default E estefade ,mikonim
fn (e){
e.preventDefault();
& sakht newNote
let newNote=doc.qurSelec()
}
3. fn bala  ra seda mizanim ba fn EventListerner();
EventListerner()
fn{
    document.querySelector(#form ?? => YANI DASTRESI BE SUBMIT FORM TA REFRESH NASHAVAD YA HAR AMALI) .addEventlistener("submit" , newNote) => submit " " .vali newNote na
}
4.list jadid ra mikhahim besazim "creatElement(li) ya harchi =>document.creatElement("li")

5. be li baiad farzand bedim ? farzand ma oun note ast daroonesh (ghablan value not ra da Note gozashtim hamoon farakhani mikonim)

6.dar //variables yek const misazim global chun ba notelist samte chap hanooz kar darim va in farzand ham darad dar function ha morede estefade gharar migirad

darvaghe dar marhale sheshom hastessh ke ezafe mishavand be chap ba (nameClass.appendChild(li)) => noteList.appendChild(li)

7. ezafe kardan dokme X be har list
=>fn 
 8. bad az ezafe kardan tag a(X) be list hala baiad fn benevisim ta agar click shod chekonad
creat fn removeNote

hamchenini bad az sakhtan an dar fn hala baiad beravim EVEnt listener braie zamani ke click mishavad fn remove shavad parentesh yani listesh . farakhani shavad
Eventlistener => , "click" , removeNote

9.ezafe kardan notemun be local storage baraie in kar 
sakhtan do ta function => braie ha;lati ke dar local storage yek meghdar hast avalm begirim aval
fn getNotesFromLocalStorage() ke dar oun 
miaim yek let tarif mikonim adesh yek let digar ta az localstorage begirimesh => ijuroi let fromLs= document.localStorage.getItem( "DAKHELESH HAMIN "NOTES" HAMIN Fn")
 
10. hala miaim bad az inke goftim meghdar ra az local storage begir chon faghat az local storage mitoonim arayy begirim chi minevisim=>
 migim agar hamin notes mosavi khali bud arayy khali bargardan  => if (notes==null){
     notes=[]
 }
 & agar por bood besorat arayye baz gardan chetori=> ba JSON.parse(dar inja let "getfromLs" mizarim chun dar in notes meghdar gerfete dge) dar zir bebinid intoori=>
 else{
notes=Json.parse("getFromLs")
 }
}
return("notes")
va bad return mikonim notes ro ta tamam meghdar gerefte shode az local storage be sorat array ke faghat bar migarde bargarde be function getLocal storage ()

11.darr in marhale fn bla ra ke return shod negah midarim va yek fn jadid misazim be name addNoteToLocalStorage(note)
 ke dar in function dar asl miaaiad meghdar note  ra migirad ((un note ke value dasht bala oun ro estfade mikone )) va bad az
  return fn ghabli(fn getlocalStorage()) ham estefade mikone ke ghablan goftim kali bood ya por bood array koon bargardan 
  hala inja Estefade baiad svad be in sorat =>
  function addNoteToLocalStorage(note){
      let notes = ke dar inja baiad oun meghdar(oun fn => manzur in getNotesFromLocalStorage()) ke ghabli bood return shode  miad yani 
      estfade be sorat array aaz ghabl anjam dadim => 
      let notes =getNotesFromLocalStorage();

      yani migim dar in fn baiad meghdar notes ke value dare ro rikhtim va bad 
    
meghdar note ro beriz dakhle NOTES
      notes.push(note)

      va bad  be sorat string SET shavad ta namaiesh bede dar application
          localStorage.setItem('notes', JSON.stringify(notes))
  

          badesh ma baiad biaim in ra farakhani konim yani biaim dar function newNote(e) ezafe mikonim be in sorat =>
          addNoteToLocalStorage(note) .hamin faghat
          alan array ma ke string shod meghdar notes gereft dar function hengam ezafe shodan be local storag ezafe mishavad
          dar application mitavan did ezafe shodanesh 
  

12 . baraie inke in meghdar local storage dar asl chizi ke neveshtim pak nashavad ba reset in ra dar event listener minevisim
    document.addEventListener('DOMContentLoaded', localStorageOnload)
    yani yek Event Listeneri be nam daghigh {DOMContentLoaded} darim , yek fn ke mikhaim tarif konim  masalan localstorageOnLoaded.

hala fn ra tarif mikonim fn LocalStorgeOnloade(){ ke dar in ma baiad bgim ina ke ghablan goftim ro begir 
    const mojod dar fn get notes LocalStorage ro aval migirim yani ((chun arraye ghabele peymaish ast dge))=>
    const=getNotesFromLocalStorage()
    
    hala miaim peimaiesh konim yani chi yani ba forEach begim dakhele in notes array khodemun note ro 
notes.forEach(function(note){
    copy list khode mu}

    namaiesh bede kojaha ?? daghighan jahaii ke list ezafe shode bood copi mikonam

13.be loal Storage ezafe shod ama pak nemishe az hafezeie local storage pas miaim dorostesh konim
aval dastrsi peida mikonim be fn remove va dar anja migim removeNoteLocalStorage(e.target.parentElement.textContent) yani =>
mikhaim dastresi peida konim be col (noveshte + zabdaresh) va bad miaim fn removeNoteLocalStorage(noteContent) tarif mikonim 
va dar fn ke tarif kardim hala yek meghdar tarif mikonim ta zabdar ra az txtContent koli joda konim => 
const noteDlete = noteContent.substring(0, noteContent.length - 1)
dar inja ba substring az noghteie 0 shoro va ta yeki munde akhar pak kon yani (X pak nemishe)
 
hala yek motghaier tarif mikonim    
 const notesFromLS = getNotesFromLocalStorage() ke da in ma meghdar array ke ghablan sakhtim yademoon bashe retuen karde boodim ro minevisim
 ta betoonim peimaish konim ke harvaght ghias kard hala chikar kon? bia daroon notesFromLs az halgheie forEach estefade kon ba yek fn (note , index)
 ke darinja note ke hamoon yr neveshte ast & index jaigah shomarei ke dar array dare
 hala migim age note===noteDelet boodesh , bia noteFromLs ba splice (index , 1) pak kon yai=>
 yeki pak shavad
   notesFromLS.forEach(function (note, index) {
        if (note === noteDelete) {
            notesFromLS.splice(index, 1)
        }
    });

    va dar nahaiat baiad Set konimesh ? be sorat string
 va dar nahayat     localStorage.setItem('notes', JSON.stringify(notesFromLS))

*/

//variables
const noteList = document.querySelector("#note-list");



//EventListener
EventListeners()
    // hamishe baiad farakhani ro bezarim t khande shavad

function EventListeners() {

    document.querySelector("#form").addEventListener("submit", newNote)
    document.querySelector("#form").addEventListener("onkeydown", newNote)
    document.querySelector("#note-list").addEventListener("click", removeNote)
    document.addEventListener('DOMContentLoaded', localStorageOnload)

}



//function
//one aval default baraie inke bada az zakhire refresh nashaavad
// event listener ana ra add mikonim

function newNote(e) {
    e.preventDefault()
    let note = document.querySelector("#note").value;
    if (note == []) {
        Swal.fire({
            title: 'okay',
            text: 'متن خالیه!',
            imageUrl: "image/khali.png",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'ثبت',
        })
    } else {
        let removeBtn = document.createElement("a");
        removeBtn.textContent = "X"
        removeBtn.classList = "btnRmw";

        let li = document.createElement("li")
        li.appendChild(document.createTextNode(note))
        li.appendChild(removeBtn)
        noteList.appendChild(li)
            // console.log(noteList);
        this.reset()
        addNoteToLocalStorage(note)
            //استفاده ازسوویت الرت برای اخر کای که الارم هم میخواست
        Swal.fire({
            title: 'okay',
            text: 'ذخیره شد',
            imageUrl: "image/okay.jpg",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'ثبت',
        })
    }


}

function removeNote(e) {
    if (e.target.classList.contains("btnRmw")) {
        e.target.parentElement.remove();
        Swal.fire({
            title: 'okay',
            text: 'حذف شد',
            imageUrl: "image/1565656.png",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'حذف',
        })
    }
    // console.log("e.target.parentElement.textContent");
    removeNoteLocalStorage(e.target.parentElement.textContent)
}

function addNoteToLocalStorage(note) {
    let notes = getNotesFromLocalStorage();
    notes.push(note)
    localStorage.setItem('notes', JSON.stringify(notes))

}

function getNotesFromLocalStorage() {
    let notes;
    let getFromLS = localStorage.getItem('notes');

    if (getFromLS == null) {
        notes = []
    } else {
        notes = JSON.parse(getFromLS)
    }
    return notes;
}

function localStorageOnload() {
    let notes = getNotesFromLocalStorage();
    notes.forEach(function(note) {
        let removeBtn = document.createElement("a");
        removeBtn.textContent = "X"
        removeBtn.classList = "btnRmw";

        let li = document.createElement("li")
        li.appendChild(document.createTextNode(note))
        li.appendChild(removeBtn)
        noteList.appendChild(li)


    });

}


function removeNoteLocalStorage(noteContent) {
    const noteDelete = noteContent.substring(0, noteContent.length - 1)
    const notesFromLS = getNotesFromLocalStorage()
    notesFromLS.forEach(function(note, index) {
        if (note === noteDelete) {
            notesFromLS.splice(index, 1)
        }
    });
    localStorage.setItem('notes', JSON.stringify(notesFromLS))

}