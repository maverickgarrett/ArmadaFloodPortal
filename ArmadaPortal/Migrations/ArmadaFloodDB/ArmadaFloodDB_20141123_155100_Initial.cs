using FluentMigrator;

namespace ArmadaPortal.Migrations.ArmadaFloodDB
{
    [Migration(20141123155100)]
    public class DefaultDB_20141123_155100_Initial : Migration
    {
        public override void Up()
        {

            this.CreateTableWithId32("Orders", "OrderID", s => s
            .WithColumn("CustomerID").AsGuid().Nullable()
            .WithColumn("CustomerName").AsString(160).NotNullable()
            .WithColumn("BranchID").AsGuid().Nullable()
            .WithColumn("BranchName").AsString(160).NotNullable()
            .WithColumn("OrderedBy").AsGuid().Nullable()
            .WithColumn("OrderedByName").AsString(200).NotNullable()
            .WithColumn("OrderedContact").AsGuid().Nullable()
            .WithColumn("OrderedContactName").AsString(200).NotNullable()
            .WithColumn("LoanType").AsInt16().Nullable()
            .WithColumn("OrderType").AsInt16().Nullable()
            .WithColumn("DeterminationStatusType").AsInt16().Nullable()
            .WithColumn("OrderNumber").AsString(100).Nullable()
            .WithColumn("EmailTo").AsString(100).Nullable()
            .WithColumn("EmailCC").AsString(100).Nullable()
            .WithColumn("OrderDate").AsDateTime().Nullable()
            .WithColumn("IsRushOrder").AsInt16().Nullable().WithDefaultValue(0)
            .WithColumn("LoanNumber").AsString(100).Nullable()
            .WithColumn("Borrower").AsString(100).Nullable()
            .WithColumn("Borrower2").AsString(100).Nullable()
            .WithColumn("EnteredAddressLine1").AsString(100).Nullable()
            .WithColumn("EnteredAddressLine2").AsString(100).Nullable()
            .WithColumn("EnteredCity").AsString(100).Nullable()
            .WithColumn("EnteredState").AsString(4).Nullable()
            .WithColumn("EnteredZip").AsString(10).Nullable()
            .WithColumn("MatcheddAddressLine1").AsString(100).Nullable()
            .WithColumn("MatchedAddressLine2").AsString(100).Nullable()
            .WithColumn("MatchedCity").AsString(100).Nullable()
            .WithColumn("MatchedState").AsString(4).Nullable()
            .WithColumn("MatchedZip").AsString(10).Nullable()
            .WithColumn("ParcelNumber").AsString(106).Nullable()
            .WithColumn("AdditionalNotes").AsString(4000).Nullable());



            IfDatabase("SqlServer", "SqlServer2000", "SqlServerCe")
                .Execute.EmbeddedScript("ArmadaPortal.Migrations.ArmadaFloodDB.ArmadaFloodDBScript_SqlServer.sql");

        }

        public override void Down()
        {
        }
    }
}