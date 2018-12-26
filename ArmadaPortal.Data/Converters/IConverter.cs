namespace ArmadaPortal.Core.Converters
{
    public interface IConverter<out TDestination, in TSource>
    {
        TDestination Convert(TSource source);
    }
}