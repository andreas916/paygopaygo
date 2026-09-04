import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  X, 
  ArrowRight, 
  Check, 
  AlertTriangle, 
  ArrowUpRight, 
  Car, 
  ShoppingBag, 
  Shirt, 
  Utensils, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { CategoryId } from '../types/budget';

export const BudgetReallocationSheet: React.FC = () => {
  const { state, closeSheet, reallocateBudget } = useBudget();

  // Target deficit category is the category selected for detail, or overbudget candidate, or food by default
  const targetCategory: CategoryId = state.selectedCategoryForDetail || state.overBudgetCandidate || 'food';
  const [sourceCategory, setSourceCategory] = useState<CategoryId>('general');
  const [amount, setAmount] = useState<number>(30000);
  const [step, setStep] = useState<'select' | 'confirm'>('select');

  const targetCat = state.categories.find(c => c.id === targetCategory) || state.categories[0];
  const sourceCat = state.categories.find(c => c.id === sourceCategory) || state.categories[1];

  // Eligible source categories: other categories that have remaining budget > 0
  const eligibleSources = state.categories.filter(c => c.id !== targetCategory && c.remaining > 0);

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'food': return <Utensils size={18} color="#ffffff" />;
      case 'general': return <ArrowUpRight size={18} color="#ffffff" />;
      case 'transport': return <Car size={18} color="#ffffff" />;
      case 'shopping': return <ShoppingBag size={18} color="#ffffff" />;
      case 'lifestyle': return <Shirt size={18} color="#ffffff" />;
      default: return <ArrowUpRight size={18} color="#ffffff" />;
    }
  };

  const handleConfirmReallocation = () => {
    reallocateBudget(sourceCategory, targetCategory, amount);
  };

  return (
    <>
      <div className="bottom-sheet-backdrop" onClick={closeSheet} />
      <div className="bottom-sheet-content">
        <div className="sheet-handle-bar" />

        {/* Sheet Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px 10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff' }}>
              Atur Ulang Budget Kategori
            </span>
          </div>

          <button 
            onClick={closeSheet}
            style={{
              background: '#222933',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#cbd5e1',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '16px 20px 30px', overflowY: 'auto' }}>
          {step === 'select' ? (
            <>
              {/* Context Banner */}
              <div 
                style={{
                  background: 'rgba(255, 67, 67, 0.12)',
                  border: '1px solid rgba(255, 67, 67, 0.3)',
                  borderRadius: '16px',
                  padding: '12px 14px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <AlertTriangle size={17} color="#ff4343" />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                    Budget {targetCat.indonesianName} Kurang Rp{amount.toLocaleString('id-ID')}
                  </span>
                </div>
                <div style={{ fontSize: '11.5px', color: '#fca5a5' }}>
                  Mau ambil dari kategori mana untuk menutupi kekurangan tanpa menambah total budget bulanan?
                </div>
              </div>

              {/* Source Category Picker */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#94a3b8', marginBottom: '10px' }}>
                  PILIH KATEGORI SUMBER (YANG MASIH ADA SISA):
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {eligibleSources.map(cat => {
                    const isSelected = cat.id === sourceCategory;
                    return (
                      <div 
                        key={cat.id}
                        onClick={() => setSourceCategory(cat.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 14px',
                          background: isSelected ? 'rgba(0, 174, 214, 0.12)' : '#1b2129',
                          border: isSelected ? '1.5px solid #00aed6' : '1px solid rgba(255, 255, 255, 0.07)',
                          borderRadius: '16px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div 
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: cat.iconBg,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {getCategoryIcon(cat.id)}
                          </div>
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                              {cat.indonesianName}
                            </div>
                            <div style={{ fontSize: '11px', color: '#00d618', fontWeight: 600 }}>
                              Sisa Rp{cat.remaining.toLocaleString('id-ID')}
                            </div>
                          </div>
                        </div>

                        <div 
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            border: isSelected ? 'none' : '2px solid #475569',
                            background: isSelected ? '#00aed6' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {isSelected && <Check size={14} color="#000000" strokeWidth={3} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Amount Selection */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#94a3b8', marginBottom: '8px' }}>
                  JUMLAH YANG DIPINDAHKAN:
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[15000, 30000, 50000].map(val => (
                    <button 
                      key={val}
                      onClick={() => setAmount(val)}
                      style={{
                        flex: 1,
                        padding: '10px 0',
                        background: amount === val ? '#00aed6' : '#222933',
                        color: amount === val ? '#000000' : '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      Rp{val.toLocaleString('id-ID')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Principle Reminder: No Saving Introduced! */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(0, 170, 19, 0.1)',
                  border: '1px solid rgba(0, 170, 19, 0.25)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  fontSize: '11px',
                  color: '#86efac',
                  marginBottom: '20px'
                }}
              >
                <ShieldCheck size={16} color="#00d618" />
                <span>Total budget bulanan tetap <strong>Rp3.000.000</strong>. Ini murni realokasi antar pengeluaran riil.</span>
              </div>

              {/* CTA Next */}
              <button 
                onClick={() => setStep('confirm')}
                style={{
                  width: '100%',
                  background: '#00aa13',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '14px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 170, 19, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Gunakan Rp{amount.toLocaleString('id-ID')}</span>
                <ArrowRight size={16} />
              </button>
            </>
          ) : (
            /* Confirmation Step */
            <>
              <div style={{ textAlign: 'center', padding: '10px 0 20px' }}>
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(0, 174, 214, 0.15)',
                    border: '1px solid #00aed6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}
                >
                  <RotateCcw size={24} color="#00aed6" />
                </div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Konfirmasi Pemindahan Budget
                </div>
                <div style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.4 }}>
                  Ambil <strong>Rp{amount.toLocaleString('id-ID')}</strong> dari kategori <strong>{sourceCat.indonesianName}</strong> ke <strong>{targetCat.indonesianName}</strong>?
                </div>
              </div>

              {/* Live Preview Diff Box */}
              <div 
                style={{
                  background: '#19202a',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '16px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Kategori Penerima (+):</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>{targetCat.indonesianName}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Rp{targetCat.monthlyBudget.toLocaleString('id-ID')}</div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#00d618' }}>
                      → Rp{(targetCat.monthlyBudget + amount).toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '10px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Kategori Sumber (-):</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>{sourceCat.indonesianName}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Rp{sourceCat.monthlyBudget.toLocaleString('id-ID')}</div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#ff7070' }}>
                      → Rp{(sourceCat.monthlyBudget - amount).toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => setStep('select')}
                  style={{
                    flex: 1,
                    background: '#222933',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '14px',
                    color: '#cbd5e1',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Kembali
                </button>

                <button 
                  onClick={handleConfirmReallocation}
                  style={{
                    flex: 2,
                    background: '#00aa13',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '14px',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 170, 19, 0.4)'
                  }}
                >
                  Ya, Pindahkan Budget
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BudgetReallocationSheet;
