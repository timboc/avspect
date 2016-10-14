using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace avspect.backend.Controllers
{
    public class AircraftType
    {
        public string Name {get; set;}
        public string Vendor {get; set;}
    }

    [Route("api/[controller]")]
    public class AircraftTypesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<AircraftType> Get()
        {
            return new [] { new AircraftType { Name = "737", Vendor = "Boeing" } };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }   
}