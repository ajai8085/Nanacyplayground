using Microsoft.Owin.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy.OWIN
{
    class Program
    {
        static void Main(string[] args)
        {
           using( WebApp.Start<Startup>("http://localhost:12344"))
           {
               Console.ReadLine();
           }
        }
    }
}
