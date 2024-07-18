# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "mystorageaccount$(Get-Random)"
$storageSkuName = "Standard_LRS" # Standard Locally-Redundant Storage

# Login to Azure (Uncomment the following line if not already logged in)
# Connect-AzAccount

# Create Resource Group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
    Write-Host "Resource group '$resourceGroupName' created in '$location'."
} else {
    Write-Host "Resource group '$resourceGroupName' already exists in '$location'."
}

# Create Storage Account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                        -Name $storageAccountName `
                                        -Location $location `
                                        -SkuName $storageSkuName `
                                        -Kind "StorageV2" `
                                        -AccessTier "Hot"
Write-Host "Storage account '$storageAccountName' created."

# Retrieve and display the primary access key
$storageAccountKey = (Get-AzStorageAccountKey -ResourceGroupName $resourceGroupName -Name $storageAccountName)[0].Value
Write-Host "Primary access key for '$storageAccountName': $storageAccountKey"