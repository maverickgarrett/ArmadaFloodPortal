
namespace ArmadaPortal.Administration
{
    public interface ICrmUserRetrieveService
    {
        ICrmUserDefinition ById(string id);

        ICrmUserDefinition ByUsername(string username);
    }
}