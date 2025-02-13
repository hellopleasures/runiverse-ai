import React, { FC, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useCharacter } from '../../context/CharacterContext.tsx'; 
// ^^^ FIXED: Updated import path to include '.tsx' and correct relative level

enum EquipScreen {
  CharacterSelection,
  Equip,
  Confirmation,
  Portal,
}

// A static placeholder array of tokens (removed reservoir kit usage).
const tokensPlaceholder = [
  {
    token: {
      tokenId: '1234',
      contract: '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42' // Wizard contract
    }
  },
  {
    token: {
      tokenId: '999',
      contract: '0x9690b63eb85467be5267a3603f770589ab12dc95' // Warrior contract
    }
  }
];

const CharacterMenu: FC = () => {
  const { selectedCharacter, setSelectedCharacter } = useCharacter();
  const [equipScreen, setEquipScreen] = useState<EquipScreen>(EquipScreen.CharacterSelection);
  const [showNewButton, setShowNewButton] = useState(false);

  const handleCharacterSelect = (character: { id: string; contract: string }) => {
    console.log('Character selected:', character);
    setSelectedCharacter(character);
  };

  const handleProceed = () => {
    setShowNewButton(true);
    setEquipScreen(EquipScreen.Equip);
  };

  const handleNewButtonClick = () => {
    console.log('New button clicked!');
    // Additional functionality can be added here if needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto p-6">
      {equipScreen === EquipScreen.CharacterSelection && (
        <div>
          <h2 className="text-5xl font-bold text-white text-center mb-8 font-atirose uppercase tracking-wide mt-10">
            Choose your
            <br />
            Adventurer
          </h2>
          <div className="py-6 flex justify-center flex-row flex-wrap gap-3">
            {tokensPlaceholder.map((token, i) => (
              <div
                key={i}
                className="cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => handleCharacterSelect({
                  id: token?.token?.tokenId ?? '',
                  contract: token?.token?.contract ?? '',
                })}
              >
                {/* Placeholder for each character card */}
                <div className="text-white">
                  {`ID: ${token?.token?.tokenId ?? ''}`}
                  {` - Contract: ${token?.token?.contract ?? ''}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center space-y-4">
        <ConnectButton.Custom>
          {({ account, chain, openChainModal, openConnectModal, openAccountModal, mounted }) => {
            const ready = mounted && 'loading';
            const connected = ready && account && chain && 'authenticated';

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        Switch Networks
                      </button>
                    );
                  }

                  return (
                    !showNewButton && (
                      <button
                        onClick={handleProceed}
                        className="text-md text-black font-ocra uppercase py-2 px-4 rounded-xl bg-yellow"
                      >
                        Proceed
                      </button>
                    )
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>

        {showNewButton && (
          <div className="flex gap-3">
            <a href="/trainer">
              <button
                onClick={handleNewButtonClick}
                className="text-md text-black font-ocra uppercase py-2 px-4 rounded-xl bg-yellow hover:bg-blue-600 transition-colors"
              >
                Agent Trainer
              </button>
            </a>
            <a href="/char_creation">
              <button
                onClick={handleNewButtonClick}
                className="text-md text-black font-ocra uppercase py-2 px-4 rounded-xl bg-yellow hover:bg-blue-600 transition-colors"
              >
                Character Editor
              </button>
            </a>
            <a href="/game">
              <button
                onClick={handleNewButtonClick}
                className="text-md text-black font-ocra uppercase py-2 px-4 rounded-xl bg-yellow hover:bg-blue-600 transition-colors"
              >
                Play The Game
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterMenu;