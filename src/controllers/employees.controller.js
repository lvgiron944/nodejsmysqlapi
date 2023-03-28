 import {pool } from "../db.js"
 
 export const getEmployees = async(req,res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employe')
    res.json(rows)
 } catch (error){
   return res.status(500).json({
    message: 'something goes wrong'
  })
   }
}


export const getEmployee = async (req, res) =>{
  try {
    const [rows] = await pool.query('SELECT * FROM employe WHERE id = ?',[req.params.id])
  
  if (rows.length <= 0 ) return res.status(404).json({
    message: 'Employe not found'
  })
  res.json(rows[0])
  } catch (error){
    return res.status(500).json({
    message:'something goes wrong'
   })
 }
}
 
 export  const createEmployees = async (req,res) => {
  const {name, salary} = req.body 

  try {
    const [rows] = await pool.query('INSERT INTO employe(name, salary) VALUES (?,?)', [name, salary])
    res.send({
    id: rows.insertId,
    name,
    salary,
   })

 } catch (error){
   return res.status(500).json({
    message:'something goes wrong'
   })
  }
}


 export const deleteEmployees = async (req,res) => {
   try {
    const [result] = await pool.query('DELETE FROM employe WHERE id = ?', [req.params.id])
   console.log(result)

   if (result.affectedRows <= 0) return res.status(404).json({
    message: 'Employe not found'
   })
   res.sendStatus(204)
  } catch (error){
    return res.satatus(500).json({
      message:'something goes wrong'
     })
   }
  }


 export const updateEmployees = async(req,res) => {
  const {id} = req.params
  const {name, salary} = req.body
  try {
    const [result] = await pool.query('UPDATE employe SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',[name,salary,id])
   console.log(result)

  if (result.affectedRows === 0 ) return res.status(400).json({
    message: 'empleando no encontrado'
  })

 const [rows] = await  pool.query('SELECT * FROM employe WHERE id = ?', [id])
  res.json(rows[0])
 }catch (error){
  return res.status(500).json({
    message:'something goes wrong'
   })
  }
}
  

 