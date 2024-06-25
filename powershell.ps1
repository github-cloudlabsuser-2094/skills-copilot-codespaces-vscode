# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageacct" # Storage account names must be between 3 and 24 characters in length and may contain numbers and lowercase letters only.
$skuName = "Standard_LRS" # Locally redundant storage
$kind = "StorageV2" # General-purpose v2 storage account

# Create a Resource Group if it doesn't already exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the Storage Account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName $skuName -Kind $kind

# Output the storage account details
$storageAccount