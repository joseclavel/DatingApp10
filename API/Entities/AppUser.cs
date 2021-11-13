using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUser : IdentityUser<int>
    {       
        public DateTime DateOfBirth { get; set; }

        [Column(TypeName="varchar(255)")]
        public string KnownAs { get; set; }
        
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string Gender { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Introduction { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string LookingFor { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Interests { get; set; }

        [Column(TypeName="varchar(150)")]
        public string City { get; set; }

        [Column(TypeName="varchar(150)")]
        public string Country { get; set; }
        public ICollection<Photo> Photos { get; set; }

        // public int GetAge () {
            
        //     return DateOfBirth.CalculateAge();
        // }

        public ICollection<AppUserRole> UserRoles {get; set;}
    }
}