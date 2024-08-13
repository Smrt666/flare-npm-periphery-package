import AddressValidity from "./artifacts/contracts/interface/types/AddressValidity.sol/AddressValidity.json";
import BalanceDecreasingTransaction from "./artifacts/contracts/interface/types/BalanceDecreasingTransaction.sol/BalanceDecreasingTransaction.json";
import Bn256 from "./artifacts/contracts/fastUpdates/lib/Bn256.sol/Bn256.json";
import ConfirmedBlockHeightExists from "./artifacts/contracts/interface/types/ConfirmedBlockHeightExists.sol/ConfirmedBlockHeightExists.json";
import EVMTransaction from "./artifacts/contracts/interface/types/EVMTransaction.sol/EVMTransaction.json";
import FlareContractsRegistryLibrary from "./artifacts/contracts/ContractRegistryLibrary.sol/FlareContractsRegistryLibrary.json";
import IAddressValidityVerification from "./artifacts/contracts/generated/verification/interface/IAddressValidityVerification.sol/IAddressValidityVerification.json";
import IBalanceDecreasingTransactionVerification from "./artifacts/contracts/generated/verification/interface/IBalanceDecreasingTransactionVerification.sol/IBalanceDecreasingTransactionVerification.json";
import ICChainStake from "./artifacts/contracts/ICChainStake.sol/ICChainStake.json";
import ICChainVotePower from "./artifacts/contracts/ICChainVotePower.sol/ICChainVotePower.json";
import IClaimSetupManager from "./artifacts/contracts/IClaimSetupManager.sol/IClaimSetupManager.json";
import IConfirmedBlockHeightExistsVerification from "./artifacts/contracts/generated/verification/interface/IConfirmedBlockHeightExistsVerification.sol/IConfirmedBlockHeightExistsVerification.json";
import IDelegationAccount from "./artifacts/contracts/IDelegationAccount.sol/IDelegationAccount.json";
import IEVMTransactionVerification from "./artifacts/contracts/generated/verification/interface/IEVMTransactionVerification.sol/IEVMTransactionVerification.json";
import IEntityManager from "./artifacts/contracts/IEntityManager.sol/IEntityManager.json";
import IFastUpdateIncentiveManager from "./artifacts/contracts/IFastUpdateIncentiveManager.sol/IFastUpdateIncentiveManager.json";
import IFastUpdater from "./artifacts/contracts/IFastUpdater.sol/IFastUpdater.json";
import IFastUpdatesConfiguration from "./artifacts/contracts/IFastUpdatesConfiguration.sol/IFastUpdatesConfiguration.json";
import IFlareAssetRegistry from "./artifacts/contracts/IFlareAssetRegistry.sol/IFlareAssetRegistry.json";
import IFlareContractRegistry from "./artifacts/contracts/IFlareContractRegistry.sol/IFlareContractRegistry.json";
import IFlareDaemonize from "./artifacts/contracts/genesis/interface/IFlareDaemonize.sol/IFlareDaemonize.json";
import IFlareSystemsCalculator from "./artifacts/contracts/IFlareSystemsCalculator.sol/IFlareSystemsCalculator.json";
import IFlareSystemsManager from "./artifacts/contracts/IFlareSystemsManager.sol/IFlareSystemsManager.json";
import IFtso from "./artifacts/contracts/IFtso.sol/IFtso.json";
import IFtsoFeedDecimals from "./artifacts/contracts/IFtsoFeedDecimals.sol/IFtsoFeedDecimals.json";
import IFtsoFeedIdConverter from "./artifacts/contracts/IFtsoFeedIdConverter.sol/IFtsoFeedIdConverter.json";
import IFtsoFeedPublisher from "./artifacts/contracts/IFtsoFeedPublisher.sol/IFtsoFeedPublisher.json";
import IFtsoGenesis from "./artifacts/contracts/genesis/interface/IFtsoGenesis.sol/IFtsoGenesis.json";
import IFtsoInflationConfigurations from "./artifacts/contracts/IFtsoInflationConfigurations.sol/IFtsoInflationConfigurations.json";
import IFtsoManager from "./artifacts/contracts/IFtsoManager.sol/IFtsoManager.json";
import IFtsoManagerGenesis from "./artifacts/contracts/genesis/interface/IFtsoManagerGenesis.sol/IFtsoManagerGenesis.json";
import IFtsoRegistry from "./artifacts/contracts/IFtsoRegistry.sol/IFtsoRegistry.json";
import IFtsoRegistryGenesis from "./artifacts/contracts/genesis/interface/IFtsoRegistryGenesis.sol/IFtsoRegistryGenesis.json";
import IFtsoRewardManager from "./artifacts/contracts/IFtsoRewardManager.sol/IFtsoRewardManager.json";
import IFtsoRewardOffersManager from "./artifacts/contracts/IFtsoRewardOffersManager.sol/IFtsoRewardOffersManager.json";
import IGenericRewardManager from "./artifacts/contracts/IGenericRewardManager.sol/IGenericRewardManager.json";
import IGovernanceSettings from "./artifacts/contracts/IGovernanceSettings.sol/IGovernanceSettings.json";
import IGovernanceVotePower from "./artifacts/contracts/IGovernanceVotePower.sol/IGovernanceVotePower.json";
import IGovernor from "./artifacts/contracts/IGovernor.sol/IGovernor.json";
import IIClaimSetupManager from "./artifacts/contracts/protocol/interface/IIClaimSetupManager.sol/IIClaimSetupManager.json";
import IICleanable from "./artifacts/contracts/token/interface/IICleanable.sol/IICleanable.json";
import IICleanupBlockNumberManager from "./artifacts/contracts/protocol/interface/IICleanupBlockNumberManager.sol/IICleanupBlockNumberManager.json";
import IIEntityManager from "./artifacts/contracts/protocol/interface/IIEntityManager.sol/IIEntityManager.json";
import IIFastUpdateIncentiveManager from "./artifacts/contracts/fastUpdates/interface/IIFastUpdateIncentiveManager.sol/IIFastUpdateIncentiveManager.json";
import IIFastUpdater from "./artifacts/contracts/fastUpdates/interface/IIFastUpdater.sol/IIFastUpdater.json";
import IIFlareSystemsCalculator from "./artifacts/contracts/protocol/interface/IIFlareSystemsCalculator.sol/IIFlareSystemsCalculator.json";
import IIFlareSystemsManager from "./artifacts/contracts/protocol/interface/IIFlareSystemsManager.sol/IIFlareSystemsManager.json";
import IIFtso from "./artifacts/contracts/ftso/interface/IIFtso.sol/IIFtso.json";
import IIFtsoFeedPublisher from "./artifacts/contracts/ftso/interface/IIFtsoFeedPublisher.sol/IIFtsoFeedPublisher.json";
import IIGovernanceVotePower from "./artifacts/contracts/token/interface/IIGovernanceVotePower.sol/IIGovernanceVotePower.json";
import IIGovernorProposer from "./artifacts/contracts/governance/interface/IIGovernorProposer.sol/IIGovernorProposer.json";
import IINodePossessionVerifier from "./artifacts/contracts/protocol/interface/IINodePossessionVerifier.sol/IINodePossessionVerifier.json";
import IIPollingFoundation from "./artifacts/contracts/governance/interface/IIPollingFoundation.sol/IIPollingFoundation.json";
import IIPublicKeyVerifier from "./artifacts/contracts/protocol/interface/IIPublicKeyVerifier.sol/IIPublicKeyVerifier.json";
import IIRNat from "./artifacts/contracts/rNat/interface/IIRNat.sol/IIRNat.json";
import IIRNatAccount from "./artifacts/contracts/rNat/interface/IIRNatAccount.sol/IIRNatAccount.json";
import IIRelay from "./artifacts/contracts/protocol/interface/IIRelay.sol/IIRelay.json";
import IIRewardEpochSwitchoverTrigger from "./artifacts/contracts/protocol/interface/IIRewardEpochSwitchoverTrigger.sol/IIRewardEpochSwitchoverTrigger.json";
import IIRewardManager from "./artifacts/contracts/protocol/interface/IIRewardManager.sol/IIRewardManager.json";
import IISubmission from "./artifacts/contracts/protocol/interface/IISubmission.sol/IISubmission.json";
import IIVPContract from "./artifacts/contracts/token/interface/IIVPContract.sol/IIVPContract.json";
import IIVPToken from "./artifacts/contracts/token/interface/IIVPToken.sol/IIVPToken.json";
import IIVoterRegistrationTrigger from "./artifacts/contracts/protocol/interface/IIVoterRegistrationTrigger.sol/IIVoterRegistrationTrigger.json";
import IIVoterRegistry from "./artifacts/contracts/protocol/interface/IIVoterRegistry.sol/IIVoterRegistry.json";
import IIncreaseManager from "./artifacts/contracts/IIncreaseManager.sol/IIncreaseManager.json";
import IMerkleRootStorage from "./artifacts/contracts/IMerkleRootStorage.sol/IMerkleRootStorage.json";
import IPaymentVerification from "./artifacts/contracts/generated/verification/interface/IPaymentVerification.sol/IPaymentVerification.json";
import IPollingFtso from "./artifacts/contracts/IPollingFtso.sol/IPollingFtso.json";
import IPriceSubmitter from "./artifacts/contracts/IPriceSubmitter.sol/IPriceSubmitter.json";
import IRNat from "./artifacts/contracts/IRNat.sol/IRNat.json";
import IRNatAccount from "./artifacts/contracts/IRNatAccount.sol/IRNatAccount.json";
import IRandomProvider from "./artifacts/contracts/IRandomProvider.sol/IRandomProvider.json";
import IReferencedPaymentNonexistenceVerification from "./artifacts/contracts/generated/verification/interface/IReferencedPaymentNonexistenceVerification.sol/IReferencedPaymentNonexistenceVerification.json";
import IRelay from "./artifacts/contracts/IRelay.sol/IRelay.json";
import IRewardManager from "./artifacts/contracts/IRewardManager.sol/IRewardManager.json";
import IStateConnector from "./artifacts/contracts/IStateConnector.sol/IStateConnector.json";
import ISubmission from "./artifacts/contracts/ISubmission.sol/ISubmission.json";
import ITypeTemplateVerification from "./artifacts/contracts/generated/verification/interface/ITypeTemplateVerification.sol/ITypeTemplateVerification.json";
import IVPContractEvents from "./artifacts/contracts/IVPContractEvents.sol/IVPContractEvents.json";
import IVPToken from "./artifacts/contracts/IVPToken.sol/IVPToken.json";
import IValidatorRewardOffersManager from "./artifacts/contracts/IValidatorRewardOffersManager.sol/IValidatorRewardOffersManager.json";
import IVoterRegistry from "./artifacts/contracts/IVoterRegistry.sol/IVoterRegistry.json";
import IVoterWhitelister from "./artifacts/contracts/IVoterWhitelister.sol/IVoterWhitelister.json";
import IWNat from "./artifacts/contracts/IWNat.sol/IWNat.json";
import IWNatDelegationFee from "./artifacts/contracts/IWNatDelegationFee.sol/IWNatDelegationFee.json";
import Payment from "./artifacts/contracts/interface/types/Payment.sol/Payment.json";
import ReferencedPaymentNonexistence from "./artifacts/contracts/interface/types/ReferencedPaymentNonexistence.sol/ReferencedPaymentNonexistence.json";
import TypeTemplate from "./artifacts/contracts/interface/types/TypeTemplate.sol/TypeTemplate.json";

export const abis: { [key: string]: any; } = {
  AddressValidity: AddressValidity.abi,
  BalanceDecreasingTransaction: BalanceDecreasingTransaction.abi,
  Bn256: Bn256.abi,
  ConfirmedBlockHeightExists: ConfirmedBlockHeightExists.abi,
  EVMTransaction: EVMTransaction.abi,
  FlareContractsRegistryLibrary: FlareContractsRegistryLibrary.abi,
  IAddressValidityVerification: IAddressValidityVerification.abi,
  IBalanceDecreasingTransactionVerification: IBalanceDecreasingTransactionVerification.abi,
  ICChainStake: ICChainStake.abi,
  ICChainVotePower: ICChainVotePower.abi,
  IClaimSetupManager: IClaimSetupManager.abi,
  IConfirmedBlockHeightExistsVerification: IConfirmedBlockHeightExistsVerification.abi,
  IDelegationAccount: IDelegationAccount.abi,
  IEVMTransactionVerification: IEVMTransactionVerification.abi,
  IEntityManager: IEntityManager.abi,
  IFastUpdateIncentiveManager: IFastUpdateIncentiveManager.abi,
  IFastUpdater: IFastUpdater.abi,
  IFastUpdatesConfiguration: IFastUpdatesConfiguration.abi,
  IFlareAssetRegistry: IFlareAssetRegistry.abi,
  IFlareContractRegistry: IFlareContractRegistry.abi,
  IFlareDaemonize: IFlareDaemonize.abi,
  IFlareSystemsCalculator: IFlareSystemsCalculator.abi,
  IFlareSystemsManager: IFlareSystemsManager.abi,
  IFtso: IFtso.abi,
  IFtsoFeedDecimals: IFtsoFeedDecimals.abi,
  IFtsoFeedIdConverter: IFtsoFeedIdConverter.abi,
  IFtsoFeedPublisher: IFtsoFeedPublisher.abi,
  IFtsoGenesis: IFtsoGenesis.abi,
  IFtsoInflationConfigurations: IFtsoInflationConfigurations.abi,
  IFtsoManager: IFtsoManager.abi,
  IFtsoManagerGenesis: IFtsoManagerGenesis.abi,
  IFtsoRegistry: IFtsoRegistry.abi,
  IFtsoRegistryGenesis: IFtsoRegistryGenesis.abi,
  IFtsoRewardManager: IFtsoRewardManager.abi,
  IFtsoRewardOffersManager: IFtsoRewardOffersManager.abi,
  IGenericRewardManager: IGenericRewardManager.abi,
  IGovernanceSettings: IGovernanceSettings.abi,
  IGovernanceVotePower: IGovernanceVotePower.abi,
  IGovernor: IGovernor.abi,
  IIClaimSetupManager: IIClaimSetupManager.abi,
  IICleanable: IICleanable.abi,
  IICleanupBlockNumberManager: IICleanupBlockNumberManager.abi,
  IIEntityManager: IIEntityManager.abi,
  IIFastUpdateIncentiveManager: IIFastUpdateIncentiveManager.abi,
  IIFastUpdater: IIFastUpdater.abi,
  IIFlareSystemsCalculator: IIFlareSystemsCalculator.abi,
  IIFlareSystemsManager: IIFlareSystemsManager.abi,
  IIFtso: IIFtso.abi,
  IIFtsoFeedPublisher: IIFtsoFeedPublisher.abi,
  IIGovernanceVotePower: IIGovernanceVotePower.abi,
  IIGovernorProposer: IIGovernorProposer.abi,
  IINodePossessionVerifier: IINodePossessionVerifier.abi,
  IIPollingFoundation: IIPollingFoundation.abi,
  IIPublicKeyVerifier: IIPublicKeyVerifier.abi,
  IIRNat: IIRNat.abi,
  IIRNatAccount: IIRNatAccount.abi,
  IIRelay: IIRelay.abi,
  IIRewardEpochSwitchoverTrigger: IIRewardEpochSwitchoverTrigger.abi,
  IIRewardManager: IIRewardManager.abi,
  IISubmission: IISubmission.abi,
  IIVPContract: IIVPContract.abi,
  IIVPToken: IIVPToken.abi,
  IIVoterRegistrationTrigger: IIVoterRegistrationTrigger.abi,
  IIVoterRegistry: IIVoterRegistry.abi,
  IIncreaseManager: IIncreaseManager.abi,
  IMerkleRootStorage: IMerkleRootStorage.abi,
  IPaymentVerification: IPaymentVerification.abi,
  IPollingFtso: IPollingFtso.abi,
  IPriceSubmitter: IPriceSubmitter.abi,
  IRNat: IRNat.abi,
  IRNatAccount: IRNatAccount.abi,
  IRandomProvider: IRandomProvider.abi,
  IReferencedPaymentNonexistenceVerification: IReferencedPaymentNonexistenceVerification.abi,
  IRelay: IRelay.abi,
  IRewardManager: IRewardManager.abi,
  IStateConnector: IStateConnector.abi,
  ISubmission: ISubmission.abi,
  ITypeTemplateVerification: ITypeTemplateVerification.abi,
  IVPContractEvents: IVPContractEvents.abi,
  IVPToken: IVPToken.abi,
  IValidatorRewardOffersManager: IValidatorRewardOffersManager.abi,
  IVoterRegistry: IVoterRegistry.abi,
  IVoterWhitelister: IVoterWhitelister.abi,
  IWNat: IWNat.abi,
  IWNatDelegationFee: IWNatDelegationFee.abi,
  Payment: Payment.abi,
  ReferencedPaymentNonexistence: ReferencedPaymentNonexistence.abi,
  TypeTemplate: TypeTemplate.abi,
};