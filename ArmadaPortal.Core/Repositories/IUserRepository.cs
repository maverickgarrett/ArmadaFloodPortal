using System;
using System.Collections.Generic;
using System.Linq;
using ArmadaPortal.Core.Models;

namespace ArmadaPortal.Core.Repositories
{
    public interface IUserRepository
    {
        User GetUserById(Guid userId);
        User GetUserByName(string userName);
    }
}