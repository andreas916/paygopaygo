import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  Search, 
  Sparkles, 
  User, 
  Wallet, 
  ArrowUp, 
  Clock, 
  MoreHorizontal, 
  Bike, 
  Car, 
  Utensils, 
  Package, 
  ShoppingBag, 
  CreditCard, 
  Grid, 
  ArrowRight, 
  Info, 
  Plus
} from 'lucide-react';

export const GojekHomePage: React.FC = () => {
  const { state, goToScreen } = useBudget();

  return (
    <div 
      style={{ 
        background: '#ffffff', 
        minHeight: '100%', 
        paddingBottom: '80px',
        position: 'relative',
        color: '#0f172a',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Top Gradient Background */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '240px',
          background: 'linear-gradient(180deg, #bcf0be 0%, #dcfce7 45%, #ffffff 100%)',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, paddingTop: '10px' }}>
        {/* Top Header Row: Search Bar, Yuk Join, Profile */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px 12px' 
          }}
        >
          {/* Search Pill */}
          <div 
            style={{ 
              flex: 1, 
              background: '#ffffff', 
              borderRadius: '999px', 
              height: '42px', 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0 14px', 
              gap: '10px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.04)'
            }}
          >
            <Search size={18} color="#64748b" />
            <span style={{ fontSize: '13.5px', color: '#1e293b', fontWeight: 500 }}>Bakso</span>
          </div>

          {/* "Yuk, join!" Gold Button */}
          <div 
            style={{ 
              background: '#fef08a', 
              borderRadius: '999px', 
              height: '42px', 
              padding: '0 14px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(234, 179, 8, 0.25)'
            }}
          >
            <Sparkles size={16} color="#854d0e" />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: '#713f12' }}>Yuk,</div>
              <div style={{ fontSize: '11px', fontWeight: 900, color: '#713f12' }}>join!</div>
            </div>
          </div>

          {/* Profile Circle Avatar */}
          <div 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: '#ffffff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer'
            }}
          >
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00aa13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} color="#ffffff" />
            </div>
          </div>
        </div>

        {/* Hero Banner Card ("Kapan Terakhir Kali?") */}
        <div 
          style={{ 
            margin: '0 16px',
            background: 'linear-gradient(135deg, #a7f3d0 0%, #86efac 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 170, 19, 0.25)',
            padding: '16px 14px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0, 170, 19, 0.12)'
          }}
        >
          {/* Badge Top Left */}
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              background: '#ffffff', 
              border: '1px solid #00aa13', 
              borderRadius: '999px', 
              padding: '2px 8px',
              marginBottom: '10px'
            }}
          >
            <span style={{ fontSize: '9px', fontWeight: 900, color: '#00880f', letterSpacing: '0.3px' }}>
              KAPAN TERAKHIR KALI?
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ maxWidth: '62%' }}>
              <div 
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 900, 
                  color: '#00600a', 
                  lineHeight: 1.15,
                  letterSpacing: '-0.3px'
                }}
              >
                PULANG MASIH<br />
                LIHAT MATAHARI<br />
                & GA MIKIR<br />
                MASAK APA
              </div>

              <div style={{ fontSize: '10.5px', color: '#047857', fontWeight: 700, marginTop: '8px' }}>
                Ada promo spesial buat kamu
              </div>
            </div>

            {/* Illustration on Right Side (Clickable to GoFood / GoRide) */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              <div 
                onClick={() => goToScreen('gofood_1')}
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '12px', 
                  background: 'rgba(255, 255, 255, 0.9)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
              >
                <Utensils size={18} color="#ff4d4f" />
                <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#ff4d4f' }}>GoFood</span>
              </div>

              <div 
                onClick={() => goToScreen('goride_1')}
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  background: '#00aa13', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 3px 10px rgba(0, 170, 19, 0.3)',
                  cursor: 'pointer'
                }}
              >
                <Bike size={24} color="#ffffff" />
                <span style={{ fontSize: '7.5px', fontWeight: 900, color: '#ffffff' }}>GoRide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating GoPay Wallet Card */}
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '20px', 
            margin: '12px 16px 16px', 
            padding: '12px 16px', 
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Left: Balance Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{ 
                width: '38px', 
                height: '38px', 
                borderRadius: '12px', 
                background: '#00aed6', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <Wallet size={20} color="#ffffff" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                  Rp{state.mainBalance.toLocaleString('id-ID')}
                </span>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus size={11} color="#00aed6" />
                </div>
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                0 coins
              </div>
            </div>
          </div>

          {/* Right: Quick GoPay Actions in Gojek */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* 1. Bayar */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowUp size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '10.5px', color: '#334155', fontWeight: 700 }}>Bayar</span>
            </div>

            {/* 2. Riwayat */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '10.5px', color: '#334155', fontWeight: 700 }}>Riwayat</span>
            </div>

            {/* 3. Lainnya (CLICK TO RETURN TO GOPAY!) */}
            <div 
              onClick={() => goToScreen('home')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}
              title="Kembali ke Aplikasi GoPay"
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MoreHorizontal size={18} color="#ffffff" />
              </div>
              {/* Red Badge 8 */}
              <span 
                style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  right: '-3px', 
                  background: '#ef4444', 
                  color: '#ffffff', 
                  fontSize: '8.5px', 
                  fontWeight: 900, 
                  width: '16px', 
                  height: '16px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '2px solid #ffffff'
                }}
              >
                8
              </span>
              <span style={{ fontSize: '10.5px', color: '#334155', fontWeight: 700 }}>Lainnya</span>
            </div>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div style={{ padding: '0 14px', marginBottom: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px 4px', textAlign: 'center' }}>
            {/* 1. GoRide */}
            <div 
              onClick={() => goToScreen('goride_1')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
              title="Buka Layanan GoRide"
            >
              <div style={{ position: 'relative' }}>
                <div className="demo-glow-green" style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bike size={26} color="#00aa13" />
                </div>
                <span style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: '#fff', fontSize: '8px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  ~5RB
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>GoRide</span>
            </div>

            {/* 2. GoCar */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Car size={26} color="#00aa13" />
                </div>
                <span style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: '#fff', fontSize: '8px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  8rb
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>GoCar</span>
            </div>

            {/* 3. GoFood */}
            <div 
              onClick={() => goToScreen('gofood_1')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
              title="Buka Layanan GoFood"
            >
              <div style={{ position: 'relative' }}>
                <div className="demo-glow-coral" style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Utensils size={26} color="#ff4d4f" />
                </div>
                <span style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: '#fff', fontSize: '8px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  Rp1
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>GoFood</span>
            </div>

            {/* 4. GoSend */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={26} color="#00aa13" />
                </div>
                <span style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: '#fff', fontSize: '8px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  7rb
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>GoSend</span>
            </div>

            {/* 5. GoMart */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShoppingBag size={26} color="#ff4d4f" />
                </div>
                <span style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  30MINS
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>GoMart</span>
            </div>

            {/* 6. GoPay Later */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CreditCard size={26} color="#0284c7" />
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600, lineHeight: 1.15 }}>GoPay<br />Later</span>
            </div>

            {/* 7. GOJEK7AN */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '26px', fontWeight: 900, color: '#00aa13' }}>7</span>
                </div>
                <span style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: '#fff', fontSize: '8px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  Rp7
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>GOJEK7AN</span>
            </div>

            {/* 8. Lainnya */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '18px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid size={24} color="#64748b" />
              </div>
              <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>Lainnya</span>
            </div>
          </div>
        </div>

        {/* Promo Green Banner ("Mau tarif GoRide lebih hemat?") */}
        <div 
          style={{ 
            margin: '0 16px 16px',
            background: 'linear-gradient(90deg, #00880f 0%, #00aa13 100%)',
            borderRadius: '16px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 14px rgba(0, 170, 19, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bike size={20} color="#00aa13" />
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>
                Mau tarif GoRide lebih hemat?
              </div>
              <div 
                style={{ 
                  marginTop: '4px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '4px', 
                  background: 'rgba(255, 255, 255, 0.95)', 
                  color: '#00aa13', 
                  borderRadius: '999px', 
                  padding: '3px 10px',
                  fontSize: '10px',
                  fontWeight: 800
                }}
              >
                <span>Beli paket sekarang</span>
                <ArrowRight size={11} />
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff', lineHeight: 0.9, letterSpacing: '-1px' }}>
              7
            </div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#ffffff', fontStyle: 'italic' }}>
              rb
            </div>
          </div>
        </div>

        {/* Hadiah Harian Card (Daily Streak Calendar) */}
        <div 
          style={{ 
            margin: '0 16px 16px',
            background: '#f8fafc',
            borderRadius: '22px',
            border: '1px solid #e2e8f0',
            padding: '14px 12px 14px',
            position: 'relative',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
          }}
        >
          {/* Calendar Binder Ring Hinges */}
          <div style={{ position: 'absolute', top: '-6px', left: '40px', width: '8px', height: '14px', background: '#94a3b8', borderRadius: '4px' }} />
          <div style={{ position: 'absolute', top: '-6px', right: '40px', width: '8px', height: '14px', background: '#94a3b8', borderRadius: '4px' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '12px', position: 'relative' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
              Hadiah Harian
            </span>
            <Info size={14} color="#64748b" style={{ position: 'absolute', right: 0 }} />
          </div>

          {/* 7 Day Streak Items */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '14px' }}>
            {/* Day 1 (Active) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#ffffff', border: '2px solid #00aa13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: 900 }}>
                  🪙
                </div>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#0f172a' }}>20</span>
            </div>

            {/* Day 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>🎟️</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>1000</span>
            </div>

            {/* Day 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>🪙</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>50</span>
            </div>

            {/* Day 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>🎟️</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>2000</span>
            </div>

            {/* Day 5 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>🪙</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>70</span>
            </div>

            {/* Day 6 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>🎟️</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>3000</span>
            </div>

            {/* Day 7 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>🪙</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>100</span>
            </div>
          </div>

          {/* Bottom Claim Row */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              background: '#ffffff', 
              borderRadius: '16px', 
              padding: '8px 12px',
              border: '1px solid #f1f5f9'
            }}
          >
            <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#334155' }}>
              Klaim hadiah sekarang, yuk!
            </span>
            <button 
              style={{ 
                background: '#00aa13', 
                border: 'none', 
                color: '#ffffff', 
                borderRadius: '999px', 
                padding: '8px 24px', 
                fontSize: '12px', 
                fontWeight: 800, 
                cursor: 'pointer' 
              }}
            >
              Klaim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GojekHomePage;
