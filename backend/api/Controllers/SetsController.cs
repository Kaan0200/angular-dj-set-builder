using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SetsController : ControllerBase
  {
    // GET: api/<SetsController>
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET api/<SetsController>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/<SetsController>
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/<SetsController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<SetsController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
