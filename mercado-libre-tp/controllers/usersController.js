let usersController = {//objeto
           //funciones
   login: (req, res )=> {
    res.render('login');//render nos permite ver la pagina
      },
   
   register: (req, res )=> {
    res.render('register');//render nos permite ver la pagina
      },
};

 module.exports = usersController;