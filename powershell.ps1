# Parameters
param(
    [string]$resourceGroupName = "example-resources",
    [string]$location = "West Europe",
    [string]$storageAccountName = "examplestorageacct"
)

# Login to Azure
Connect-AzAccount

# Create Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create Storage Account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"

Write-Output "Storage account '$storageAccountName' created successfully