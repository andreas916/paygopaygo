import React from 'react';
import { useBudget } from '../../context/BudgetContext';
import { 
  ArrowLeft, 
  Percent, 
  ChevronDown, 
  ArrowRight, 
  Gift, 
  Utensils, 
  X, 
  MoreHorizontal,
  Wallet
} from 'lucide-react';

export const GoFood3Page: React.FC = () => {
  const { goToScreen } = useBudget();

  return (
    <div 
      style={{ 
        background: '#f8fafc', 
        minHeight: '100%', 
        paddingBottom: '140px',
        position: 'relative',
        color: '#0f172a',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Top Header Bar */}
      <div 
        style={{ 
          background: '#ffffff', 
          padding: '12px 16px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          borderBottom: '1px solid #f1f5f9',
          position: 'sticky',
          top: 0,
          zIndex: 30
        }}
      >
        <button 
          onClick={() => goToScreen('gofood_2')}
          style={{ 
            background: 'none', 
            border: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'pointer',
            padding: 0
          }}
        >
          <ArrowLeft size={22} color="#0f172a" />
        </button>
        <span style={{ fontSize: '15.5px', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Ayam Bakar Madu Lisa
        </span>
      </div>

      {/* Savings Green Alert Banner */}
      <div 
        style={{ 
          background: '#dcfce7', 
          padding: '10px 16px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          borderBottom: '1px solid #bbf7d0'
        }}
      >
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#00aa13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Percent size={12} color="#ffffff" />
        </div>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#047857' }}>
          Yay! Kamu hemat <strong style={{ color: '#065f46' }}>7.499</strong> untuk pembelian ini.
        </span>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Section Title */}
        <h2 style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a', margin: '0 0 12px' }}>
          Ringkasan pembayaran
        </h2>

        {/* Payment Breakdown Card */}
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '20px', 
            padding: '16px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            border: '1px solid #f1f5f9',
            marginBottom: '14px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#475569', marginBottom: '10px' }}>
            <span>Harga</span>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>22.500</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#475569', marginBottom: '10px' }}>
            <span>Biaya Penanganan dan Pengiriman</span>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>7.000</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#475569', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>Biaya lainnya</span>
              <ChevronDown size={14} />
            </div>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>3.000</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#00aa13', fontWeight: 700, marginBottom: '14px' }}>
            <span>Diskon lainnya</span>
            <span>-7.499</span>
          </div>

          <div style={{ height: '1px', background: '#f1f5f9', margin: '10px 0 12px' }} />

          {/* Total Pembayaran */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a' }}>
              Total pembayaran
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>32.500</span>
              <span style={{ fontSize: '17px', fontWeight: 900, color: '#0f172a' }}>25.001</span>
            </div>
          </div>
        </div>

        {/* Promo Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          {/* Pink Card */}
          <div 
            style={{ 
              background: '#fff1f2', 
              border: '1px solid #ffe4e6', 
              borderRadius: '16px', 
              padding: '12px 14px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Percent size={13} color="#ffffff" />
              </div>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#0f172a' }}>
                Cek promo menarik di sini
              </span>
            </div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={13} color="#ffffff" />
            </div>
          </div>

          {/* White Card */}
          <div 
            style={{ 
              background: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: '16px', 
              padding: '12px 14px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#00aa13' }}>
              Cek diskon lainnya
            </span>
            <ArrowRight size={16} color="#00aa13" />
          </div>
        </div>

        {/* Eco Options & Gift */}
        <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
          {/* Minta Alat Makan */}
          <div style={{ padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', maxWidth: '82%' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Utensils size={18} color="#64748b" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>
                  Minta alat makan atau...
                </div>
                <div style={{ fontSize: '10.5px', color: '#64748b', marginTop: '2px' }}>
                  Klik jika butuh aja. Yuk, kurangi limbah!
                </div>
              </div>
            </div>
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', border: '2px solid #cbd5e1', cursor: 'pointer' }} />
          </div>

          {/* Kirim Sebagai Hadiah */}
          <div style={{ padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', maxWidth: '82%' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Gift size={18} color="#ef4444" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>
                  Kirim sebagai hadiah
                </div>
                <div style={{ fontSize: '10.5px', color: '#64748b', marginTop: '2px' }}>
                  Isi ucapan virtual dan detail penerimanya.
                </div>
              </div>
            </div>
            <ArrowRight size={16} color="#64748b" />
          </div>
        </div>
      </div>

      {/* Floating Bottom Payment Dock (CRITICAL HIGHLIGHT: Saldo Kurang) */}
      <div 
        style={{ 
          position: 'sticky', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          background: '#ffffff',
          boxShadow: '0 -6px 24px rgba(0,0,0,0.12)',
          zIndex: 80,
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          overflow: 'hidden',
          marginTop: 'auto'
        }}
      >
        {/* Black Status Strip (HIGHLIGHT SALDO) */}
        <div 
          style={{ 
            background: '#1e242d', 
            padding: '8px 16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            color: '#ffffff'
          }}
        >
          <span style={{ fontSize: '12.5px', fontWeight: 800, letterSpacing: '0.2px' }}>
            Sisa saldo: Rp13.971
          </span>
          <X size={15} color="#cbd5e1" style={{ cursor: 'pointer' }} />
        </div>

        {/* Payment Source Row */}
        <div style={{ padding: '10px 16px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* GoPay Coins */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: 900 }}>
                🪙
              </div>
              <div style={{ fontSize: '10.5px', color: '#64748b' }}>
                <div>GoPay Coins</div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>10</div>
              </div>
              <span style={{ color: '#94a3b8', fontSize: '14px', marginLeft: '4px' }}>+</span>
            </div>

            {/* GoPay Tabungan by Jago (RED INSUFFICIENT BALANCE) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wallet size={13} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#64748b', whiteSpace: 'nowrap' }}>
                  GoPay Tabungan by Jag...
                </div>
                {/* Highlighted Red Amount (Rp13.971 < Rp25.001) */}
                <div style={{ fontSize: '12px', fontWeight: 900, color: '#ef4444' }}>
                  13.971
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <MoreHorizontal size={18} color="#0f172a" />
          </div>
        </div>

        {/* Big Green Order Button */}
        <div style={{ padding: '8px 16px 14px' }}>
          <button 
            style={{ 
              width: '100%', 
              background: '#00aa13', 
              border: 'none', 
              borderRadius: '999px', 
              padding: '13px 0', 
              color: '#ffffff', 
              fontSize: '14.5px', 
              fontWeight: 800, 
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0, 170, 19, 0.35)'
            }}
          >
            Pesan dan antar sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoFood3Page;
