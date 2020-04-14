using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CRUD_1Page_Framework.Models;

namespace CRUD_1Page_Framework.Controllers
{
    public class EquipeController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Equipe
        public IQueryable<Equipe> GetEquipe()
        {
            return db.Equipe;
        }

        // GET: api/Equipe/5
        [ResponseType(typeof(Equipe))]
        public IHttpActionResult GetEquipe(int id)
        {
            Equipe equipe = db.Equipe.Find(id);
            if (equipe == null)
            {
                return NotFound();
            }

            return Ok(equipe);
        }

        // PUT: api/Equipe/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEquipe(int id, Equipe equipe)
        {

            if (id != equipe.EquipeId)
            {
                return BadRequest();
            }

            db.Entry(equipe).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Equipe
        [ResponseType(typeof(Equipe))]
        public IHttpActionResult PostEquipe(Equipe equipe)
        {

            db.Equipe.Add(equipe);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = equipe.EquipeId }, equipe);
        }

        // DELETE: api/Equipe/5
        [ResponseType(typeof(Equipe))]
        public IHttpActionResult DeleteEquipe(int id)
        {
            Equipe equipe = db.Equipe.Find(id);
            if (equipe == null)
            {
                return NotFound();
            }

            db.Equipe.Remove(equipe);
            db.SaveChanges();

            return Ok(equipe);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EquipeExists(int id)
        {
            return db.Equipe.Count(e => e.EquipeId == id) > 0;
        }
    }
}